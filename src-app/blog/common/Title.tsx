import React, { useRef } from "react";

import { useDesignSystem } from "src-core/ds";
import { useRect } from "src-core/react";
import { margin, border } from "src-core/style";

import { rhythm } from "../common/typography";

export const Title = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  return (
    <div
      ref={ref}
      css={[
        {
          ...margin(rhythm(2), 0, rhythm(3 / 4)),
          fontSize: ds.size.l,
          color: ds.color.text,
        },
        rect.width > ds.grid.m
          ? {
              ...border("bottom", 3, "solid", ds.color.primary),
            }
          : {},
      ]}>
      {children}
    </div>
  );
};
