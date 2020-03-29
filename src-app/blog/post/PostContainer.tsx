import React from "react";
import { rgba, border, margin, padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { flex, fluidType } from "src-core/style";

export const PostContainer = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        [`h1,
        h2`]: {
          ...border("bottom", 3, "solid", ds.color.primary),
          paddingBottom: ds.spacing[2],
          fontWeight: ds.weight.normal,
        },
        h1: {
          ...fluidType("sm", "xl", 24, 32),
          ...margin(ds.spacing[10], 0, ds.spacing[2]),
        },
        h2: {
          ...fluidType("sm", "xl", 20, 25),
          ...margin(ds.spacing[8], 0, ds.spacing[1]),
        },
        h3: {
          ...fluidType("sm", "xl", 18, 22),
          ...margin(ds.spacing[10], 0, 0),
          boxDecorationBreak: "clone",
        },
        "h2 + h3": {
          marginTop: ds.spacing[6],
        },

        p: {
          ...fluidType("sm", "xl", 15, 16),
          ...margin(ds.spacing[6], 0, 0),
        },
        "h3 + p": {
          marginTop: ds.spacing[3],
        },

        lineHeight: 1.675,

        ul: {
          ...margin(ds.spacing[6], ds.spacing[8]),
        },
        [`li > ol,
          li > ul`]: {
          ...margin(ds.spacing[6], ds.spacing[8]),
        },

        img: {
          display: "block",
          margin: "0 auto",
          maxWidth: 600,
        },

        blockquote: {
          ...margin(ds.spacing[6], 0, 0),
          ...padding(ds.spacing[5], ds.spacing[4]),
          ...border("left", 9, "solid", "#ffe564"),
          background: rgba("#ffe564", 0.3),
          overflow: "auto",

          "& p:first-of-type": {
            margin: 0,
          },
        },

        "& a:not(.anchor):not(.gatsby-resp-image-link):not(.vglnk)": {
          ...border("bottom", 1, "solid", "#ddd"),
          background: rgba("#ddd", 0.3),
        },

        ".twitter-content": {
          ...flex({ justifyContent: "center" }),
        },
      }}>
      {children}
    </div>
  );
};
