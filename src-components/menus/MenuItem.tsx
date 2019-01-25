import React from "react";
import { CSSObject } from "@emotion/core";

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
      return { float: right ? "right" : "left" };
    case MenuMode.VERTICAL:
      return {};
  }
};

export const menuItemStyle: CSSObject = {
  cursor: "pointer",
};
