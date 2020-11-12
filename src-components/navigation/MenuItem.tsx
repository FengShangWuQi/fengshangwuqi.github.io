import React from "react";
import { CSSObject } from "@emotion/core";
import { padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { pickElmAttrs } from "utils/pickElmAttrs";

import { MenuMode, useMenu } from "./Menu";

const menuItemStyle: CSSObject = {};

const menuItemModeStyle = (mode: MenuMode, right: boolean): CSSObject => {
  const ds = useDesignSystem();

  switch (mode) {
    case MenuMode.HORIZONTAL:
      return { ...padding(0, ds.spacing[4]), float: right ? "right" : "left" };
    case MenuMode.VERTICAL:
      return {
        height: 32,
        lineHeight: "32px",
        paddingLeft: ds.spacing[3],
      };
  }
};

export const MenuItem = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  const { mode, right } = useMenu();

  return (
    <li
      {...pickElmAttrs(otherProps)}
      css={[{ ...menuItemModeStyle(mode!, right!) }, { ...menuItemStyle }]}>
      {children}
    </li>
  );
};
