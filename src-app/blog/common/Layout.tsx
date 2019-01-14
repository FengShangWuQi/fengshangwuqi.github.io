import React from "react";

import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = {
    ...defaultTheme,
    body: {
      background: defaultTheme.color.bgLight,
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <DSReset />
      {children}
    </ThemeProvider>
  );
};
