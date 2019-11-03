import React, { createContext, useContext } from "react";
import { CSSObject } from "@emotion/core";

import { padding } from "src-core/style";

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

export const Menu = ({
  mode = MenuMode.HORIZONTAL,
  right = false,
  children,
}: IMenu) => (
  <MenuProvider
    value={{
      mode,
      right,
    }}>
    {children}
  </MenuProvider>
);

export const menuModeStyle = (
  mode: MenuMode = MenuMode.HORIZONTAL,
): CSSObject => {
  switch (mode) {
    case MenuMode.HORIZONTAL:
      return {
        height: 80,
        lineHeight: "80px",
      };
    case MenuMode.VERTICAL:
      return {
        ...padding(10, 0),
        width: 200,
      };
  }
};
