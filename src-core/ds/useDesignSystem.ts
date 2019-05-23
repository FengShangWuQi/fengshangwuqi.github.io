import { Context, useContext } from "react";
import { ThemeContext } from "@emotion/core";
import { ITheme } from "./defaultTheme";

export const useDesignSystem = () => {
  return useContext(ThemeContext as Context<ITheme>);
};
