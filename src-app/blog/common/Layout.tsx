import React from "react";

import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider theme={defaultTheme}>
    <DSReset />
    <div
      css={theme => ({
        background: theme.color.bgLight,
      })}>
      {children}
    </div>
  </ThemeProvider>
);
