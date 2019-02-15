import React from "react";

import { useDesignSystem } from "src-core/ds";
import { margin, border } from "src-core/style";

import { rhythm } from "../common/typography";

export const Title = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <p
      css={{
        ...margin(rhythm(2), 0, rhythm(3 / 4)),
        ...border("bottom", 3, "solid", ds.color.primary),
        fontSize: ds.size.l,
        color: ds.color.text,
      }}>
      {children}
    </p>
  );
};
