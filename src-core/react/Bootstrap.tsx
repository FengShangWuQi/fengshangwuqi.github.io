import React, { useState, StrictMode } from "react";
import { merge } from "lodash";

import {
  ThemeProvider,
  DSReset,
  ITheme,
  ToggleThemeProvider,
} from "src-core/ds";

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
    </StrictMode>
  );
};
