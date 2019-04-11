import React from "react";
import { CSSObject } from "@emotion/core";

import { padding, rhythm } from "src-core/style";

import { MenuMode } from "./Menu";

export const MenuItem = ({ children }: { children: React.ReactNode }) => {
  return <div css={[{ ...menuItemStyle }]}>{children}</div>;
};

export const menuItemModeStyle = (
  mode: MenuMode,
  right: boolean,
): CSSObject => {
  switch (mode) {
    case MenuMode.HORIZONTAL:
      return { ...padding(0, rhythm(3 / 4)), float: right ? "right" : "left" };
    case MenuMode.VERTICAL:
      return {
        height: 32,
        lineHeight: "32px",
        paddingLeft: rhythm(1 / 2),
        "&:first-of-type": {
          marginTop: 8,
        },
        "&:last-of-type": {
          marginBottom: 8,
        },
      };
  }
};

export const menuItemStyle: CSSObject = {};
