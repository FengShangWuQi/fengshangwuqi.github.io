import React, { createContext, useContext } from "react";
import { CSSObject } from "@emotion/react";
import { padding } from "polished";

import { pickElmAttrs } from "utils/pickElmAttrs";

export enum MenuMode {
  VERTICAL,
  HORIZONTAL,
}

export interface IMenuContext {
  right?: boolean;
  mode?: MenuMode;
}

export interface IMenu extends IMenuContext {
  children: React.ReactNode;
}

export const MenuContext = createContext({} as IMenuContext);

export const MenuProvider = MenuContext.Provider;

export const useMenu = () => useContext(MenuContext);

const menuModeStyle = (mode: MenuMode = MenuMode.HORIZONTAL): CSSObject[] => {
  switch (mode) {
    case MenuMode.HORIZONTAL:
      return [
        {
          height: 50,
        },
      ];
    case MenuMode.VERTICAL:
      return [
        {
          ...padding(10, 0),
          width: 200,
        },
      ];
  }
};

export const Menu = ({
  mode = MenuMode.HORIZONTAL,
  right = false,
  children,
  ...otherProps
}: IMenu) => (
  <ul
    {...pickElmAttrs(otherProps)}
    css={[
      ...menuModeStyle(mode),
      {
        listStyle: "none",
        overflow: "hidden",
      },
    ]}>
    <MenuProvider
      value={{
        mode,
        right,
      }}>
      {children}
    </MenuProvider>
  </ul>
);

export * from "./MenuItem";
