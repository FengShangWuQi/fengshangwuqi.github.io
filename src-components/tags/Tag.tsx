import React from "react";

import { pickElmAttrs } from "src-core/react";
import { useDesignSystem } from "src-core/ds";

import { padding } from "src-core/style";

export interface ITag {
  color: string;
  bg: string;
  children: React.ReactNode;
}

export const Tag = ({ color, bg, children, ...otherProps }: ITag) => {
  const ds = useDesignSystem();

  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        ...padding(2, 5),
        display: "inline-block",
        fontSize: ds.size.xs,
        borderRadius: ds.radius.base,
        color,
        background: bg,
      }}>
      {children}
    </div>
  );
};
