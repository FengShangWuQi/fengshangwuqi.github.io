import React from "react";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

export const AttrDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        marginLeft: ds.padding.s,
      }}>
      <div
        css={{
          marginBottom: ds.padding.m,
        }}>
        100、答题挺辛苦，这道题就送给你了
      </div>

      <Row
        css={{
          marginBottom: ds.padding.s,
        }}>
        <Radio name="100" id="100-A"></Radio>
        <Label
          css={{
            "&::after": {
              color: ds.color.success,
            },
          }}
          htmlFor="100-A"
          data-tip="✔︎ Perfect">
          正确答案，请选我
        </Label>
      </Row>
      <Row>
        <Radio name="100" id="100-B"></Radio>
        <Label
          css={{
            "&::after": {
              color: ds.color.error,
            },
          }}
          htmlFor="100-B"
          data-tip="✘ Sad">
          错误答案
        </Label>
      </Row>
    </div>
  );
};

const Row = ({ children, ...otherProps }: { children: React.ReactNode }) => (
  <div
    {...pickElmAttrs(otherProps)}
    css={{
      ...flex({
        alignItems: "center",
      }),
    }}>
    {children}
  </div>
);

const Radio = ({ ...otherProps }) => {
  const ds = useDesignSystem();

  return (
    <input
      {...pickElmAttrs(otherProps)}
      type="radio"
      css={{
        marginTop: -3,
        marginRight: ds.padding.s,
        cursor: "pointer",
        "&+label::after": {
          content: "attr(data-tip)",
          marginLeft: ds.padding.s,
          display: "none",
        },
        "&:checked+label::after": {
          display: "inline",
        },
      }}></input>
  );
};

const Label = ({
  children,
  ...otherProps
}: { children: React.ReactNode } & React.HTMLProps<HTMLElement>) => (
  <label
    {...pickElmAttrs(otherProps)}
    css={{
      cursor: "pointer",
    }}>
    {children}
  </label>
);
