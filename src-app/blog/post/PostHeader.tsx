import React from "react";
import { position } from "polished";

import { size } from "src-core/style";

export const PostHeader = ({ children }: { children: React.ReactNode }) => {
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
          boxShadow: "inset 120px 100px 500px 50px rgba(0, 0, 0, 0.75)",
          zIndex: 100,
        }}
      />
      {children}
    </div>
  );
};
