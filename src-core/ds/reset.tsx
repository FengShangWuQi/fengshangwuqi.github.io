import React from "react";
import { Global } from "@emotion/core";

import { useDesignSystem } from "src-core/ds";
import { normalize } from "src-core/style";

export const DSReset = () => {
  const ds = useDesignSystem();

  return (
    <>
      <Global styles={{ ...normalize() }} />

      <Global
        styles={{
          body: {
            fontFamily: ds.fontFamily.system,
          },

          a: {
            color: `${ds.color.primary}`,
          },
          "a:hover": {
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
