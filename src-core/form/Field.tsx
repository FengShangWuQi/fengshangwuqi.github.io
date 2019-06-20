import React from "react";

import { useForm } from "./Form";

export interface IFieldProps {
  name: string;
  label?: string;
  defaultValue?: string;
  validate?: IFieldValidate;
  onValueChange?: (value: string) => void;
}

export interface IFieldInnerProps extends IFieldValidate, IFieldState {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
}

export interface IFieldState {
  focus?: boolean;
  error?: string;
}

export interface IFieldValidate {
  required?: boolean;
  maxlength?: number;
  size?: number;
}

export const Field = ({
  name,
  validate,
  onValueChange,
  children,
  ...otherProps
}: IFieldProps & {
  children: (innerProps: IFieldInnerProps) => React.ReactNode;
}) => {
  const { formState, setFormState } = useForm();
  const { values = {} } = formState;

  const formUpdateField = (nextValue: string) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: nextValue,
      },
    });
  };

  return (
    <>
      {children({
        name,
        value: values[name] || "",
        onChange: e => {
          const nextValue = e!.target.value;
          formUpdateField(nextValue);
          onValueChange && onValueChange(nextValue);
        },
        ...validate,
        ...otherProps,
      })}
    </>
  );
};

export const useField = ({
  name,
  validate,
  onValueChange,
  ...otherProps
}: IFieldProps): IFieldInnerProps => {
  const { formState, setFormState } = useForm();
  const { values = {} } = formState;

  const formUpdateField = (nextValue: string) => {
    setFormState({
      ...formState,
      values: {
        ...formState.values,
        [name]: nextValue,
      },
    });
  };

  return {
    name,
    value: values[name] || "",
    onChange: e => {
      const nextValue = e!.target.value;
      formUpdateField(nextValue);
      onValueChange && onValueChange(nextValue);
    },
    ...validate,
    ...otherProps,
  };
};

export const useFields = (props: IFieldProps[]): IFieldInnerProps[] =>
  props.map(item => useField(item));
