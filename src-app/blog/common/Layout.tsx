import React from "react";
import { Global } from "@emotion/core";

import {
  ThemeProvider,
  DSReset,
  defaultTheme,
  useDesignSystem,
} from "src-core/ds";
import { border, position, margin } from "src-core/style";

import { Nav } from "../common/Nav";
import { Loadingbar } from "../common/LoadingBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const blogTheme = {
    ...defaultTheme,
    color: {
      ...defaultTheme.color,
      primary: "#3c2584",
    },
  };

  return (
    <ThemeProvider theme={blogTheme}>
      <DSReset />
      <BlogGlobal />

      <Loadingbar />
      <Container>
        <Nav />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export const Container = ({ children }: { children: React.ReactNode }) => (
  <div
    css={{
      ...margin(0, "auto", 60),
      ...position("relative"),
      maxWidth: 1200,
    }}>
    {children}
  </div>
);

const BlogGlobal = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        "h1, h2": {
          ...border("bottom", 3, "solid", ds.color.primary),
          paddingBottom: 12,
          fontWeight: "normal",
          color: ds.color.text,
        },
        h1: {
          ...margin(25, 0),
        },
        h2: {
          ...margin(50, 0, 25),
        },
        h3: {
          marginTop: 30,
        },
      }}
    />
  );
};
