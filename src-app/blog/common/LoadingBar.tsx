import React from "react";

import { border } from "src-core/style";

import { useDesignSystem } from "src-core/ds";

export const Loadingbar = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...border("top", 8, "solid", ds.color.primary),
      }}
    />
  );
};
