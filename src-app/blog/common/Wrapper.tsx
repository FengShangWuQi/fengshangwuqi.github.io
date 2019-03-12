import React, { useRef } from "react";

import { useDesignSystem } from "src-core/ds";
import { useRect } from "src-core/react";
import { padding } from "src-core/style";

import { rhythm } from "./typography";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={[
        {
          ...padding(0, 25, rhythm(5 / 2)),
          overflow: "hidden",
        },
        rect.width > ds.grid.m ? { boxShadow: "inset 0 0 30px #eee" } : {},
      ]}>
      {children}
    </div>
  );
};
