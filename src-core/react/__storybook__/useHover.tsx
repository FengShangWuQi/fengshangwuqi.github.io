import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useHover } from "..";

export default () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <div
        ref={hoverRef}
        css={{
          width: 100,
          height: 100,
          background: "darkturquoise",
          borderRadius: 5,
          transition: "transform 0.3s",
          ...(isHovered ? { transform: "scale(1.1)" } : {}),
        }}
      />

      <EditLink path="src-core/react/useHover.ts" />
    </div>
  );
};
