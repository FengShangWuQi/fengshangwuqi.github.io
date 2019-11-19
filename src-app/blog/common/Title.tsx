import React from "react";
import { border, margin } from "polished";

import { useDesignSystem } from "src-core/ds";

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
          ...margin(ds.spacing[12], 0, ds.spacing[4]),
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
