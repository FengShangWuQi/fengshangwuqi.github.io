import React from "react";
import { Global } from "@emotion/core";

import { defaultTheme } from "src-core/ds";

export const storybookTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primary: "#c2185b",
  },
};

export const StorybookGlobal = () => {
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
