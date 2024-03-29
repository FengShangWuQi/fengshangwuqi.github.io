import React from "react";

import { useDesignSystem } from "src-core/ds";
import { flex } from "src-core/style";

import { Button } from "src-components/basic/button";

import { useHover } from "../useHover";

export const UseHoverDemo = () => {
  const ds = useDesignSystem();

  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
        }),
      }}>
      <span ref={hoverRef}>
        <Button>hover</Button>
      </span>

      <div css={{ marginLeft: ds.spacing[2] }}>
        {isHovered ? "hover" : "not hover"}
      </div>
    </div>
  );
};
