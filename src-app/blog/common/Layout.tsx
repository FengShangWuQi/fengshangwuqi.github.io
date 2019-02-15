import React from "react";
import { Global } from "@emotion/core";

import {
  ThemeProvider,
  DSReset,
  defaultTheme,
  useDesignSystem,
} from "src-core/ds";
import { border, position, margin } from "src-core/style";

import { Nav } from "./Nav";
import { Loadingbar } from "./LoadingBar";
import { rhythm } from "./typography";

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
      ...margin(0, "auto"),
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
        [`h1,
          h2`]: {
          ...border("bottom", 3, "solid", ds.color.primary),
          paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
          fontWeight: "normal",
          color: ds.color.text,
        },
        h1: {
          ...margin(rhythm(3 / 2), 0, rhythm(3 / 4)),
        },
        h2: {
          ...margin(rhythm(4 / 3), 0, rhythm(1 / 4)),
        },
        h3: {
          ...margin(rhythm(1), 0, rhythm(1 / 4)),
        },
      }}
    />
  );
};
