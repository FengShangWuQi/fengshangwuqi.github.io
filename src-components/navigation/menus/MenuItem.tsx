import React from "react";
import { CSSObject } from "@emotion/core";

import { pickElmAttrs } from "src-core/react";
import { padding, rhythm } from "src-core/style";

import { MenuMode, useMenu } from "./Menu";

export const menuItemStyle: CSSObject = {};

const menuItemModeStyle = (mode: MenuMode, right: boolean): CSSObject => {
  switch (mode) {
    case MenuMode.HORIZONTAL:
      return { ...padding(0, rhythm(3 / 4)), float: right ? "right" : "left" };
    case MenuMode.VERTICAL:
      return {
        height: 32,
        lineHeight: "32px",
        paddingLeft: rhythm(1 / 2),
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
