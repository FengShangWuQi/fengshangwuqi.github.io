import { createContext, useContext } from "react";

import { IDictionary } from "utils/object";

interface IToggleTheme {
  toggleTheme: (theme: IDictionary<IDictionary<string | number>>) => void;
}

export const ToggleThemeContext = createContext({} as IToggleTheme);

export const ToggleThemeProvider = ToggleThemeContext.Provider;

export const useToglleTheme = () => useContext(ToggleThemeContext);
