import { Context, useContext } from "react";
import { ThemeContext } from "@emotion/core";
import { ITheme } from "./defaultTheme";

export { ThemeProvider } from "emotion-theming";
export { defaultTheme } from "./defaultTheme";
export { DSReset } from "./reset";

export const useDesignSystem = () => {
  return useContext(ThemeContext as Context<ITheme>);
};
