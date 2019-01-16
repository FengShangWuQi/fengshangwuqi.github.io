import React from "react";
import { margin, position } from "polished";

import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = {
    ...defaultTheme,
    body: {
      background: "#F4F5FA",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <DSReset />
      <div
        css={{
          ...margin(0, "auto"),
          ...position("relative"),
          maxWidth: 1200,
        }}>
        {children}
      </div>
    </ThemeProvider>
  );
};
