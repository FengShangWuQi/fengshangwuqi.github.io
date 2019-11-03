import React from "react";
import { CSSObject } from "@emotion/core";

import { pickElmAttrs } from "src-core/react";

import { Menu, IMenu, menuModeStyle } from "./Menu";

const baseMenuStyle: CSSObject = {
  listStyle: "none",
  overflow: "hidden",
};

export const BaseMenu = ({ children, mode, right, ...otherProps }: IMenu) => (
  <ul
    {...pickElmAttrs(otherProps)}
    css={[{ ...menuModeStyle(mode) }, { ...baseMenuStyle }]}>
    <Menu mode={mode} right={right}>
      {children}
    </Menu>
  </ul>
);
