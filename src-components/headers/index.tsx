import React, { useRef } from "react";

import { useElementRect } from "src-core/react";
import { useDesignSystem } from "src-core/ds";
import { size, position } from "src-core/style";

import { Stars } from "src-components/canvas";

export const Header = () => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useElementRect(ref);

  return (
    <div
      ref={ref}
      css={{
        ...position("relative"),
        ...size("100%", 400),
        background: "#171a19",
        color: ds.color.text,
        cursor: "grab",
        "&:active": {
          cursor: "grabbing",
        },
      }}>
      <Stars width={rect.width} height={rect.height} />
    </div>
  );
};
