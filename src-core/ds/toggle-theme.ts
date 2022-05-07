import { createContext, useContext } from "react";
import { Dictionary } from "lodash";

interface IToggleTheme {
  toggleTheme: (theme: Dictionary<Dictionary<string | number>>) => void;
}

export const ToggleThemeContext = createContext({} as IToggleTheme);

export const ToggleThemeProvider = ToggleThemeContext.Provider;

export const useToglleTheme = () => useContext(ToggleThemeContext);
