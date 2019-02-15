import React from "react";
import { CSSObject } from "@emotion/core";

import { useDesignSystem } from "src-core/ds";
import { padding } from "src-core/style";

export interface ITag {
  color: string;
  bg: string;
  style?: CSSObject;
  children: React.ReactNode;
}

export const Tag = ({ color, bg, children, style }: ITag) => {
  const ds = useDesignSystem();

  return (
    <div
      css={[
        {
          ...padding(2, 5),
          display: "inline-block",
          fontSize: ds.size.xs,
          borderRadius: ds.radius.base,
          color,
          background: bg,
        },
        { ...style },
      ]}>
      {children}
    </div>
  );
};
