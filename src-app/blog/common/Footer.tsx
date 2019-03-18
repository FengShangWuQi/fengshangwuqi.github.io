import React, { useRef } from "react";

import { useDesignSystem } from "src-core/ds";
import { useRect } from "src-core/react";
import { rhythm, padding } from "src-core/style";

export const Footer = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={
        rect.width < ds.grid.lg
          ? { ...padding(rhythm(1), 25, rhythm(8 / 7)) }
          : { paddingTop: rhythm(1) }
      }>
      {children}
    </div>
  );
};
