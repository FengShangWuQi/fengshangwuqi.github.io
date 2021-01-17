import React from "react";
import { position } from "polished";

import { useDesignSystem } from "src-core/ds";

export const MixBlendModeDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...position("relative"),
        height: 140,
        textTransform: "uppercase",
        "& h1": {
          ...position("absolute"),
          fontSize: ds.size["6xl"],
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
  );
};
