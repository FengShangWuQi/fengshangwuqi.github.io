import React from "react";
import { border } from "polished";

import { useDesignSystem } from "src-core/ds";

import { useHover } from "../../useHover";

export const UseHoverDemo = () => {
  const ds = useDesignSystem();

  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      css={{
        ...border(1, "solid", "transparent"),
        display: "inline-block",
        marginLeft: 10,
        padding: "0.75em 2em",
        fontSize: ds.size.xs,
        textTransform: "uppercase",
        color: ds.color.bg,
        background: ds.color.primary,
        boxShadow: `2px 4px 10px ${ds.colorPalette.blueGray}`,
        borderRadius: ds.radius.base,
        cursor: "pointer",
        transition: "all 280ms ease-out",
        ...(isHovered && {
          ...border(1, "solid", ds.color.primary),
          color: ds.color.primary,
          background: ds.color.bg,
        }),
      }}>
      hover
    </div>
  );
};
