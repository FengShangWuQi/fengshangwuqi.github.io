import React from "react";

import { position } from "src-core/style";

export const MixBlendModeDemo = () => {
  return (
    <div
      css={{
        ...position("relative"),
        height: 140,
        textTransform: "uppercase",
        "& h1": {
          ...position("absolute"),
          fontSize: 96,
        },
      }}>
      <h1
        css={{
          top: -1,
          left: 8,
          color: "#ffdead",
        }}>
        mixblendmode
      </h1>
      <h1
        css={{
          top: 3,
          left: 7,
          color: "#db7093",
        }}>
        mixblendmode
      </h1>
      <h1
        css={{
          top: 6,
          left: 3,
          color: "#00CED1",
          mixBlendMode: "darken",
        }}>
        mixblendmode
      </h1>
    </div>

    // <EditLink path="cases/css/__storybook__/mix-blend-mode.tsx" />
  );
};
