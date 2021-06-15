import React from "react";
import { Global } from "@emotion/react";
import { border, position } from "polished";
import produce from "immer";

import { Bootstrap } from "src-core/react";
import { defaultTheme, useDesignSystem } from "src-core/ds";
import { mq } from "src-core/style";

const blogTheme = produce(defaultTheme, theme => {
  theme.color.primary = "#3c2584";
});

const BlogGlobal = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        html: {
          fontSize: ds.size.base,
        },
      }}
    />
  );
};

const Loadingbar = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...border("top", 8, "solid", ds.color.primary),
      }}
    />
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={mq(["lg"], {
        ...position("relative"),
        margin: ["0 auto", `0 auto ${ds.spacing[16]}`],
        maxWidth: 1200,
      })}>
      {children}
    </div>
  );
};

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <Bootstrap ds={blogTheme}>
    <BlogGlobal />

    <Loadingbar />
    <Container>{children}</Container>
  </Bootstrap>
);
