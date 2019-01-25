import React from "react";
import { CSSObject } from "@emotion/core";

import { Menu, IMenu, menuModeStyle } from "./Menu";

interface IBaseMenu extends IMenu {
  style?: CSSObject;
}

export const BaseMenu = ({
  children,
  style,
  ...props
}: IBaseMenu & { children: React.ReactNode }) => (
  <ul css={[{ ...menuModeStyle }, { ...baseMenuStyle }, { ...style }]}>
    <Menu {...props}>{children}</Menu>
  </ul>
);

const baseMenuStyle: CSSObject = {
  height: 100,
  lineHeight: "100px",
  listStyle: "none",
};
