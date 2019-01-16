import React from "react";
import { size } from "polished";

import { useDesignSystem } from "src-core/ds";

export const Header = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...size(400, "100%"),
        background: "#101012",
        color: ds.color.white,
      }}
    />
  );
};
