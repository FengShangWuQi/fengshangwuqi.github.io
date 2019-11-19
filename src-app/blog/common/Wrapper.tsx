import React from "react";

import { useDesignSystem } from "src-core/ds";
import { mq } from "src-core/style";

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={mq(["lg"], {
        padding: [
          `${ds.spacing[1]} ${ds.spacing[6]} 3.5rem`,
          `${ds.spacing[1]} ${ds.spacing[8]} 3.5rem`,
        ],
        boxShadow: `inset 0 0 30px ${ds.color.bgLight}`,
        overflow: "hidden",
      })}>
      {children}
    </div>
  );
};
