import React from "react";
import { CSSObject } from "@emotion/core";

import { pickElmAttrs } from "src-core/react";

import { Menu, IMenu, menuModeStyle } from "./Menu";

export const BaseMenu = ({
  children,
  mode,
  right,
  ...otherProps
}: IMenu & { children: React.ReactNode }) => (
  <ul
    {...pickElmAttrs(otherProps)}
    css={[{ ...menuModeStyle(mode) }, { ...baseMenuStyle }]}>
    <Menu mode={mode} right={right}>
      {children}
    </Menu>
  </ul>
);

const baseMenuStyle: CSSObject = {
  listStyle: "none",
  overflow: "hidden",
};
