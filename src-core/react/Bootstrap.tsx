import React, { useState, StrictMode } from "react";
import { merge } from "lodash";
import { MDXProvider } from "@mdx-js/react";

import {
  ThemeProvider,
  DSReset,
  ITheme,
  ToggleThemeProvider,
} from "src-core/ds";

import { Source } from "src-app/storybook/common/source";

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
      <MDXProvider components={{ Source }}>
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
      </MDXProvider>
    </StrictMode>
  );
};
