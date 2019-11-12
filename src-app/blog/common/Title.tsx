import React from "react";
import { border, margin } from "polished";

import { useDesignSystem } from "src-core/ds";
import { rhythm } from "src-core/style";

export const Title = ({
  children,
  withBorder,
}: {
  children: React.ReactNode;
  withBorder?: boolean;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={[
        {
          ...margin(rhythm(2), 0, rhythm(3 / 4)),
          fontSize: ds.fontSize.xl,
        },
        withBorder
          ? {
              ...border("bottom", 3, "solid", ds.color.primary),
            }
          : {},
      ]}>
      {children}
    </div>
  );
};
