import React from "react";
import { lighten, position, border } from "polished";

import { useDesignSystem } from "src-core/ds";

import { pickElmAttrs } from "utils/pickElmAttrs";

export const Button = ({
  children,
  primary = false,
  ...otherProps
}: React.ButtonHTMLAttributes<any> & {
  children: React.ReactNode;
  primary?: boolean;
}) => {
  const ds = useDesignSystem();

  return (
    <button
      css={{
        ...position("relative"),
        ...border(1, "solid", ds.color.primary),
        padding: `${ds.spacing["1"]} ${ds.spacing["3"]}`,
        borderRadius: ds.radius.default,
        outline: 0,
        cursor: "pointer",
        transition: "all 0.2s",
        ...(primary
          ? {
              color: ds.colorPalette.white,
              background: ds.color.primary,
              "&:hover": {
                ...border(1, "solid", lighten(0.1, ds.color.primary)),
                background: lighten(0.1, ds.color.primary),
              },
            }
          : {
              color: ds.color.primary,
              background: ds.colorPalette.white,
              "&:hover": {
                ...border(1, "solid", lighten(0.1, ds.color.primary)),
                color: lighten(0.1, ds.color.primary),
              },
            }),
      }}
      type="button"
      {...pickElmAttrs(otherProps)}>
      {children}
    </button>
  );
};
