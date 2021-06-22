import React, { forwardRef, ButtonHTMLAttributes } from "react";
import { lighten, position, border } from "polished";

import { useDesignSystem } from "src-core/ds";

import { pickElmAttrs } from "utils/pickElmAttrs";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  primary?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  function Button(
    { children, primary = false, ...otherProps }: IButtonProps,
    ref,
  ) {
    const ds = useDesignSystem();

    return (
      <button
        ref={ref}
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
  },
);
