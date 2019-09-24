import { createContext, useContext } from "react";

type theme = "light" | "dark";

interface IToggleTheme {
  theme: theme;
  toggleTheme: () => void;
}

export const ToggleThemeContext = createContext({} as IToggleTheme);

export const ToggleThemeProvider = ToggleThemeContext.Provider;

export const useToglleTheme = () => useContext(ToggleThemeContext);
