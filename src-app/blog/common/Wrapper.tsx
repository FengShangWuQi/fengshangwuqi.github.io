import React from "react";

import { useDesignSystem } from "src-core/ds";
import { rhythm, padding } from "src-core/style";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...padding(0, 25, rhythm(5 / 2)),
        boxShadow: `inset 0 0 30px ${ds.color.bgLight}`,
        overflow: "hidden",
      }}>
      {children}
    </div>
  );
};
