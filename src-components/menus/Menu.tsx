import React, { createContext, useContext } from "react";
import { CSSObject } from "@emotion/core";

export enum MenuMode {
  VERTICAL,
  HORIZONTAL,
}

export interface IMenu {
  right?: boolean;
  mode?: MenuMode;
}

export interface IMenuContext extends IMenu {}

export const MenuContext = createContext({} as IMenuContext);

export const MenuProvider = MenuContext.Provider;

export const useMenu = () => useContext(MenuContext);

export const Menu = ({
  mode = MenuMode.HORIZONTAL,
  right = false,
  children,
}: IMenu & { children: React.ReactNode }) => (
  <MenuProvider
    value={{
      mode,
      right,
    }}>
    {children}
  </MenuProvider>
);

export const menuModeStyle = (mode: MenuMode): CSSObject => {
  switch (mode) {
    case MenuMode.HORIZONTAL:
      return {};
    case MenuMode.VERTICAL:
      return {};
  }
};
