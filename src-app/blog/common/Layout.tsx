import React from "react";
import { margin, position } from "polished";

import { ThemeProvider, DSReset, defaultTheme } from "src-core/ds";

import { Nav } from "../common/Nav";
import { Footer } from "../common/Footer";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const blogTheme = {
    ...defaultTheme,
    color: {
      primary: "#3c2584",
    },
  };

  return (
    <ThemeProvider theme={blogTheme}>
      <DSReset />
      <div
        css={{
          ...margin(0, "auto"),
          ...position("relative"),
          maxWidth: 1200,
        }}>
        <Nav />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};
