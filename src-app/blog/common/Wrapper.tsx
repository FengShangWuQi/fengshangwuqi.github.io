import React from "react";

import { useDesignSystem } from "src-core/ds";
import { mq } from "src-core/style";

export const Wrapper = ({
  withShadow,
  children,
}: {
  withShadow?: boolean;
  children: React.ReactNode;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={mq(["lg"], {
        padding: [
          `${ds.spacing[1]} ${ds.spacing[6]} 3.5rem`,
          `${ds.spacing[1]} ${ds.spacing[8]} 3.5rem`,
        ],
        overflow: "hidden",
        ...(withShadow && { boxShadow: `inset 0 0 30px ${ds.color.bgLight}` }),
      })}>
      {children}
    </div>
  );
};
