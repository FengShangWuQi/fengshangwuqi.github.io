import React from "react";

import { pickElmAttrs } from "src-core/react";

import { IFieldInnerProps } from "./Field";

export interface IInputProps
  extends IFieldInnerProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof IFieldInnerProps> {}

export const Input = (props: IInputProps) => {
  return <input {...pickElmAttrs(props)} />;
};
