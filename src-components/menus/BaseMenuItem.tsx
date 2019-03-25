import React from "react";
import { CSSObject } from "@emotion/core";

import { pickElmAttrs } from "src-core/react";

import { padding } from "src-core/style";

import { useMenu } from "./Menu";
import { MenuItem, menuItemStyle, menuItemModeStyle } from "./MenuItem";

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

const baseMenuItemStyle: CSSObject = {
  ...padding(0, 15),
  cursor: "pointer",
};
