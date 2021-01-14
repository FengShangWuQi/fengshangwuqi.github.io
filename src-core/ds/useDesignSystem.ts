import { Context, useContext } from "react";
import { ThemeContext } from "@emotion/react";
import { ITheme } from "./defaultTheme";

export const useDesignSystem = () => {
  return useContext(ThemeContext as Context<ITheme>);
};
