import React from "react";
import { CSSObject } from "@emotion/core";

import { padding } from "src-core/style";

import { useMenu } from "./Menu";
import { MenuItem, menuItemStyle, menuItemModeStyle } from "./MenuItem";

interface IBaseMenuItem {
  style?: CSSObject;
}

export const BaseMenuItem = ({
  children,
  style,
  ...props
}: IBaseMenuItem & { children: React.ReactNode }) => {
  const { mode, right } = useMenu();

  return (
    <li
      css={[
        { ...menuItemModeStyle(mode!, right!) },
        { ...menuItemStyle },
        { ...baseMenuItemStyle },
        { ...style },
      ]}>
      <MenuItem {...props}>{children}</MenuItem>
    </li>
  );
};

const baseMenuItemStyle: CSSObject = {
  ...padding(0, 15),
};
