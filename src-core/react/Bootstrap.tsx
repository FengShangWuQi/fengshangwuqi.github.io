import React, { useState, StrictMode } from "react";

import {
  ThemeProvider,
  DSReset,
  ITheme,
  ToggleThemeProvider,
} from "src-core/ds";
import { Location } from "src-core/router";

import { merge } from "utils/object";

export const Bootstrap = ({
  ds,
  children,
}: {
  ds: ITheme;
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState(ds);

  return (
    <StrictMode>
      <Location>
        <ToggleThemeProvider
          value={{
            toggleTheme: adjustedTheme =>
              setTheme(merge(theme, adjustedTheme) as ITheme),
          }}>
          <ThemeProvider theme={theme}>
            <DSReset />
            {children}
          </ThemeProvider>
        </ToggleThemeProvider>
      </Location>
    </StrictMode>
  );
};
