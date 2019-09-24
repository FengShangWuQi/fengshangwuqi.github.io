import React, { StrictMode } from "react";

import {
  ThemeProvider,
  ToggleThemeProvider,
  DSReset,
  ITheme,
} from "src-core/ds";
import { Location } from "src-core/router";

import { useLocalStorage } from ".";

export const Bootstrap = ({
  ds,
  children,
}: {
  ds: ITheme;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const dsTheme = theme === "light" ? ds : ds.reverse();

  return (
    <StrictMode>
      <Location>
        <ToggleThemeProvider
          value={{
            theme,
            toggleTheme,
          }}>
          <ThemeProvider theme={dsTheme}>
            <DSReset />
            {children}
          </ThemeProvider>
        </ToggleThemeProvider>
      </Location>
    </StrictMode>
  );
};
