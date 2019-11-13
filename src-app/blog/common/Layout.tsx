import React from "react";
import { Global } from "@emotion/core";
import { border, margin, position } from "polished";
import produce from "immer";

import { Bootstrap } from "src-core/react";
import { defaultTheme, useDesignSystem } from "src-core/ds";
import { rhythm, mq } from "src-core/style";

import { Nav } from "./Nav";
import { Loadingbar } from "./LoadingBar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const blogTheme = produce(defaultTheme, theme => {
    theme.color.primary = "#3c2584";
  });

  return (
    <Bootstrap ds={blogTheme}>
      <BlogGlobal />

      <Loadingbar />
      <Container>
        <Nav />
        {children}
      </Container>
    </Bootstrap>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={mq(["lg"], {
        ...position("relative"),
        margin: ["0 auto", `0 auto ${rhythm(3)}`],
        maxWidth: 1200,
      })}>
      {children}
    </div>
  );
};

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
