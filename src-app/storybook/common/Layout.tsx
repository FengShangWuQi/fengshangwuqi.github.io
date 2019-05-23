import React from "react";
import { Global } from "@emotion/core";

import { defaultTheme, useDesignSystem } from "src-core/ds";

import { rhythm, margin, border } from "src-core/style";

export const storybookTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primary: "#c2185b",
    text: "#1B1D1D",
  },
};

export const StorybookGlobal = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        "html, body": {
          width: "100%",
          height: "100%",
          background: "#fafafa",
        },

        h1: {
          marginBottom: rhythm(1),
        },

        h3: {
          ...margin(rhythm(3 / 2), 0, rhythm(1)),
          ...border("bottom", 1, "solid", ds.color.primary),
          paddingBottom: rhythm(1 / 2),
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
