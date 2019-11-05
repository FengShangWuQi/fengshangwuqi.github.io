import React from "react";

import { useForm } from "./Form";

export interface IFieldProps {
  name: string;
  desc?: string;
  label?: string;
  validate?: IFieldValidate;
  onValueChange?: (value: string) => void;
}

export interface IFieldInnerProps extends IFieldValidate, IFieldState {
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<any>) => void;
  onFocus?: (e: React.FocusEvent<any>) => void;
  onBlur: (e: React.FocusEvent<any>) => void;
}

export interface IFieldState {
  focus?: boolean;
  changed?: boolean;
  error?: string;
}

export interface IFieldValidate {
  required?: boolean;
  pattern?: string;
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
  const { values = {}, fields } = formState;

  const formUpdateField = (nextValue: string) => {
    setFormState({
      ...formState,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          changed: true,
        },
      },
      values: {
        ...values,
        [name]: nextValue,
      },
    });
  };

  const formFocusField = () => {
    setFormState({
      ...formState,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          focus: true,
        },
      },
    });
  };

  const formBlurField = () => {
    setFormState({
      ...formState,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          focus: false,
        },
      },
    });
  };

  return (
    <>
      {children({
        name,
        value: values[name] || "",
        onChange: e => {
          const nextValue = e.target.value;
          formUpdateField(nextValue);
          onValueChange && onValueChange(nextValue);
        },
        onFocus: () => {
          formFocusField();
        },
        onBlur: () => {
          formBlurField();
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
  const { values = {}, fields } = formState;

  const formUpdateField = (nextValue: string) => {
    setFormState({
      ...formState,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          changed: true,
        },
      },
      values: {
        ...values,
        [name]: nextValue,
      },
    });
  };

  const formFocusField = () => {
    setFormState({
      ...formState,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          focus: true,
        },
      },
    });
  };

  const formBlurField = () => {
    setFormState({
      ...formState,
      fields: {
        ...fields,
        [name]: {
          ...fields[name],
          focus: false,
        },
      },
    });
  };

  return {
    name,
    value: values[name] || "",
    onChange: e => {
      const nextValue = e.target.value;
      formUpdateField(nextValue);
      onValueChange && onValueChange(nextValue);
    },
    onFocus: () => {
      formFocusField();
    },
    onBlur: () => {
      formBlurField();
    },
    ...validate,
    ...otherProps,
  };
};

export const useFields = (props: IFieldProps[]): IFieldInnerProps[] =>
  props.map(item => useField(item));
