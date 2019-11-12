import React from "react";
import { Global } from "@emotion/core";
import { rgba, border, margin, padding } from "polished";
import produce from "immer";

import { Bootstrap, pickElmAttrs } from "src-core/react";
import { useDesignSystem, defaultTheme, PrismTheme } from "src-core/ds";
import { rhythm } from "src-core/style";

export const storybookTheme = produce(defaultTheme, theme => {
  theme.color.primary = "#c2185b";
  theme.color.secondary = rgba("#c2185b", 0.85);
  theme.color.bg = "#fafafa";
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Bootstrap ds={storybookTheme}>
      <StorybookGlobal />
      <PrismTheme />

      {children}
    </Bootstrap>
  );
};

const StorybookGlobal = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        "html, body": {
          width: "100%",
          height: "100%",
          overflow: "hidden",
        },

        h1: {
          marginBottom: rhythm(1),
        },

        h3: {
          ...margin(rhythm(3 / 2), 0, rhythm(1)),
          ...border("bottom", 1, "solid", ds.color.primary),
          paddingBottom: rhythm(1 / 2),
        },

        button: {
          cursor: "pointer",
        },
      }}
    />
  );
};

export const Center = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        ...margin(40, "auto"),
        ...padding(0, 24),
        maxWidth: 1200,
        minWidth: 900,
      }}>
      {children}
    </div>
  );
};

export const Container = ({
  children,
  ...otherProps
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      {...pickElmAttrs(otherProps)}
      css={{
        height: "calc(100vh - 130px)",
        overflow: "scroll",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}>
      {children}
    </div>
  );
};
