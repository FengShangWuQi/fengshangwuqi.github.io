import { Context, useContext } from "react";
import { ThemeContext } from "@emotion/react";
import { ITheme } from "./default-theme";

export const useDesignSystem = () => {
  return useContext(ThemeContext as Context<ITheme>);
};
