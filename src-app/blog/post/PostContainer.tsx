import React from "react";
import { rgba } from "polished";

import { flex, border, padding } from "src-core/style";

export const PostContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    css={{
      "& a:not(.anchor):not(.gatsby-resp-image-link)": {
        ...border("bottom", 1, "solid", "#ddd"),
        background: rgba("#ddd", 0.3),
      },
      ul: {
        marginTop: 20,
        marginLeft: 25,

        "& li": {
          marginTop: 12,
        },
      },
      p: {
        marginTop: 30,
      },
      blockquote: {
        ...padding(20, 45, 20, 26),
        ...border("left", 9, "solid", "#ffe564"),
        marginTop: 30,
        background: rgba("#ffe564", 0.3),
        overflow: "auto",

        "& p": {
          marginTop: 15,

          "&:first-of-type": {
            marginTop: 0,
          },
        },
      },
      ".twitter-content": {
        ...flex({ justifyContent: "center" }),
      },
    }}>
    {children}
  </div>
);
