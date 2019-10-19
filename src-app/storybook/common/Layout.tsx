import React from "react";
import { Global } from "@emotion/core";
import { rgba } from "polished";

import { Bootstrap, pickElmAttrs } from "src-core/react";
import { useDesignSystem, defaultTheme, PrismTheme } from "src-core/ds";
import { rhythm, margin, padding, border } from "src-core/style";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Bootstrap ds={storybookTheme}>
      <StorybookGlobal />
      <PrismTheme />

      {children}
    </Bootstrap>
  );
};

export const storybookTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,

    primary: "#c2185b",
    secondary: rgba("#c2185b", 0.85),

    bg: "#fafafa",
  },
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
