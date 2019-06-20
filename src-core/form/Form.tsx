import React, { createContext, useContext, useState } from "react";
import { Method, AxiosRequestConfig } from "axios";

import { withoutBubble, useRequest, IRequestOpts } from "src-core/react";

import { IDictionary } from "utils/object";

import { IFieldState } from "./Field";

export interface IFormState<TFormValues> {
  fields: IDictionary<IFieldState>;
  initialValues: TFormValues;
  values: TFormValues;
  isSubmitting: boolean;
}

export interface IFormContext {
  formName: string;
  formState: IFormState<any>;
  setFormState: (state: IFormState<any>) => void;
}

export interface IFormProps<TFormValues> extends IRequestOpts {
  name: string;
  initialValues?: TFormValues;
  action?: string;
  method?: Method;
  onSubmit?: (values: TFormValues) => void;
  valuesToArg: (
    values: TFormValues,
  ) => Omit<AxiosRequestConfig, "url" | "method">;
  children: ({
    values,
    isSubmitting,
  }: {
    values: TFormValues;
    isSubmitting: boolean;
  }) => React.ReactNode;
}

export const FormContext = createContext({} as IFormContext);
export const FormProvider = FormContext.Provider;

export const useForm = () => useContext(FormContext);

export const Form = ({
  name,
  initialValues,
  action,
  method,
  onSubmit,
  valuesToArg,
  onSuccess,
  onFail,
  onFinish,
  children,
}: IFormProps<any>) => {
  const [state, setState] = useState({
    fields: {},
    initialValues,
    values: initialValues,
    isSubmitting: false,
  });

  const { values, isSubmitting } = state;

  const [request] = useRequest(
    {
      url: action,
      method,
    },
    {
      onSuccess: res => {
        onSuccess && onSuccess(res);
      },
      onFail: error => {
        onFail && onFail(error);
      },
      onFinish: () => {
        onFinish && onFinish();
        setState({
          ...state,
          isSubmitting: false,
        });
      },
    },
  );

  return (
    <FormProvider
      value={{
        formName: name,
        formState: state,
        setFormState: setState,
      }}>
      <form
        onSubmit={withoutBubble(() => {
          setState({
            ...state,
            isSubmitting: true,
          });
          onSubmit && onSubmit(values);
          request(valuesToArg(values));
        })}>
        {children({ values, isSubmitting })}
      </form>
    </FormProvider>
  );
};
