import React from "react";
import { position, size } from "polished";

import { useDesignSystem } from "src-core/ds";

export const PostHeader = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...position("relative"),
        ...size(400, "100%"),
      }}>
      <div
        css={{
          ...position("absolute", 0, 0, 0, 0),
          background: "transparent",
          boxShadow: "inset 120px 100px 500px 50px rgba(0, 0, 0, 0.75)",
          zIndex: ds.zIndex[50],
        }}
      />
      {children}
    </div>
  );
};
