import React from "react";
import { rgba, border, margin, padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { rhythm, flex } from "src-core/style";

export const PostContainer = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        fontSize: ds.size.base,
        fontFamily: `'-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol'`,
        lineHeight: 1.625,
        "& a:not(.anchor):not(.gatsby-resp-image-link):not(.vglnk)": {
          ...border("bottom", 1, "solid", "#ddd"),
          background: rgba("#ddd", 0.3),
        },
        ul: {
          marginTop: rhythm(1),
          marginLeft: rhythm(1.25),
        },
        [`li > ol,
          li > ul`]: {
          marginLeft: rhythm(1.25),
        },
        p: {
          ...margin(rhythm(1), 0, 0),
        },
        blockquote: {
          ...margin(25, 0, 0),
          ...padding(rhythm(3 / 4), `calc(${rhythm(1)} - 1px)`),
          ...border("left", 9, "solid", "#ffe564"),
          background: rgba("#ffe564", 0.3),
          overflow: "auto",

          "& p:first-of-type": {
            marginTop: 0,
          },
        },
        ".twitter-content": {
          ...flex({ justifyContent: "center" }),
        },
      }}>
      {children}
    </div>
  );
};
