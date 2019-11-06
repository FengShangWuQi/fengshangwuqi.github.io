import React from "react";
import { Global } from "@emotion/core";
import { normalize } from "polished";

import { useDesignSystem } from "src-core/ds";

export const DSReset = () => {
  const ds = useDesignSystem();

  return (
    <>
      <Global styles={{ ...normalize() }} />

      <Global
        styles={{
          body: {
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
        }}
      />
    </>
  );
};
