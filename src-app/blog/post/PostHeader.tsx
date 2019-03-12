import React from "react";

import { useDesignSystem } from "src-core/ds";
import { size, position } from "src-core/style";

export const PostHeader = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...position("relative"),
        ...size("100%", 400),
      }}>
      <div
        css={{
          ...position("absolute", 0, 0, 0, 0),
          background: "transparent",
          boxShadow: "inset 0 0 500px 50px rgba(0, 0, 0, 0.65)",
          zIndex: ds.zIndex.mid,
        }}
      />
      {children}
    </div>
  );
};
