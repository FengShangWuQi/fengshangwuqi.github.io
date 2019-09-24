import React from "react";

import { useDesignSystem } from "src-core/ds";
import { rhythm, margin, border } from "src-core/style";

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
          fontSize: ds.size.l,
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
