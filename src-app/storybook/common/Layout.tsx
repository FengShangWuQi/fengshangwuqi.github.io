import React from "react";
import { Global } from "@emotion/core";

import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const storybookTheme = {
    ...defaultTheme,
    color: {
      ...defaultTheme.color,
      primary: "#c2185b",
    },
  };

  return (
    <ThemeProvider theme={storybookTheme}>
      <DSReset />
      <StorybookGlobal />

      {children}
    </ThemeProvider>
  );
};

const StorybookGlobal = () => {
  return (
    <Global
      styles={{
        "html, body": {
          width: "100%",
          height: "100%",
          background: "#fafafa",
        },
      }}
    />
  );
};
