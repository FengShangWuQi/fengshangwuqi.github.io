import React, { useRef } from "react";

import { useRect } from "src-core/hooks";
import { useDesignSystem } from "src-core/ds";

import { useWhyDidYouUpdate } from "../../useWhyDidYouUpdate";

export const UseWhyDidYouUpdateDemo = () => {
  const ds = useDesignSystem();

  const ref = useRef(null);
  const rect = useRect(ref);

  useWhyDidYouUpdate("rect", rect);

  return (
    <div
      ref={ref}
      css={{
        width: "100%",
        height: 250,
        border: `1px solid ${ds.color.text}`,
      }}
    />
  );
};
