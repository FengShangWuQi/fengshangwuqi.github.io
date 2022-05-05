import React from "react";
import { Global } from "@emotion/react";
import { rgba, normalize } from "polished";

import { useDesignSystem } from "src-core/ds";

export const DSReset = () => {
  const ds = useDesignSystem();

  return (
    <>
      <Global styles={{ ...normalize() }} />

      <Global
        styles={{
          body: {
            margin: 0,
            minWidth: 320,
            fontFamily: ds.fontFamily.system,
            color: ds.color.text,
            background: ds.color.bg,
          },

          a: {
            color: `${ds.color.primary}`,
            textDecoration: "none",
          },

          "h1, h2, h3, h4, h5, h6": {
            margin: 0,
          },

          "ul, li": {
            margin: 0,
            padding: 0,
          },

          dialog: {
            padding: 0,
            width: "100%",
            maxWidth: "47.375rem",
            borderRadius: 16,
            border: 0,
            overflow: "hidden",
            "&::backdrop": {
              backgroundColor: rgba("#000", 0.25),
            },
          },

          "input::placeholder": {
            color: ds.colorPalette.gray[400],
          },

          svg: {
            fill: ds.color.primary,
            verticalAlign: "middle",
          },
        }}
      />
    </>
  );
};
