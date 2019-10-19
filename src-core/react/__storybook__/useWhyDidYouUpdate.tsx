import React, { useRef } from "react";

import { useRect } from "src-core/react";
import { useDesignSystem } from "src-core/ds";

import { useWhyDidYouUpdate } from "..";

export default () => {
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

    // <EditLink path="src-core/react/useWhyDidYouUpdate.ts" />
  );
};
