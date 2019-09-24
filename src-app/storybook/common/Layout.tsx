import React from "react";
import { Global } from "@emotion/core";

import { Bootstrap } from "src-core/react";
import { useDesignSystem, defaultTheme } from "src-core/ds";
import { rhythm, margin, border } from "src-core/style";

import { Header } from "./Header";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const storybookTheme = {
    ...defaultTheme,
    color: {
      ...defaultTheme.color,

      primary: "#c2185b",
      secondary: "#d81b60",

      text: "#1B1D1D",

      bg: "#fafafa",
    },
  };

  return (
    <Bootstrap ds={storybookTheme}>
      <StorybookGlobal />

      <Header />
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

        pre: {
          ...border("left", 2, "solid", "#ddd"),
          marginBottom: 0,
          paddingLeft: 18,
        },
      }}
    />
  );
};
