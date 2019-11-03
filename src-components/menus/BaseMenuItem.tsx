import React from "react";
import { CSSObject } from "@emotion/core";

import { pickElmAttrs } from "src-core/react";

import { useMenu } from "./Menu";
import { MenuItem, menuItemStyle, menuItemModeStyle } from "./MenuItem";

const baseMenuItemStyle: CSSObject = {};

export const BaseMenuItem = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  const { mode, right } = useMenu();

  return (
    <li
      {...pickElmAttrs(otherProps)}
      css={[
        { ...menuItemModeStyle(mode!, right!) },
        { ...menuItemStyle },
        { ...baseMenuItemStyle },
      ]}>
      <MenuItem>{children}</MenuItem>
    </li>
  );
};
