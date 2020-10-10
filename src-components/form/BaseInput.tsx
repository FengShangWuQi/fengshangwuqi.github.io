import React from "react";
import { margin, padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { pickElmAttrs } from "utils";

import { flex } from "src-core/style";

import { IFieldInnerProps } from "./Field";

export interface IBaseInputProps extends IInputProps {
  desc?: string;
  label?: string;
}

export interface IInputProps
  extends IFieldInnerProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof IFieldInnerProps> {}

export const BaseInput = ({ label, desc, ...otherProps }: IBaseInputProps) => {
  return (
    <BaseInputWrapper {...{ label, desc }}>
      <Input {...otherProps} />
    </BaseInputWrapper>
  );
};

export const BaseInputWrapper = ({
  label,
  desc,
  children,
}: {
  label?: string;
  desc?: string;
  children: React.ReactNode;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...margin(ds.spacing[3], 0),
      }}>
      {label && (
        <span
          css={{
            color: ds.color.textLight,
            fontSize: ds.size.xs,
          }}>
          {label}
        </span>
      )}
      <div
        css={{
          ...flex({
            alignItems: "center",
          }),
        }}>
        {children}
        {desc && (
          <span
            css={{
              marginLeft: 8,
              fontSize: ds.size.xs,
            }}>
            {desc}
          </span>
        )}
      </div>
    </div>
  );
};

export const Input = (props: IInputProps) => {
  const ds = useDesignSystem();

  return (
    <input
      css={{
        ...padding(ds.spacing[1], ds.spacing[2]),
      }}
      {...pickElmAttrs(props)}
    />
  );
};
