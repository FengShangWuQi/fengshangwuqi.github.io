import React from "react";
import { border } from "polished";

import { useDesignSystem } from "src-core/ds";

export const PrefersColorSchemeDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        height: 150,
        padding: ds.spacing[5],
        fontSize: ds.size["2xl"],
        "@media (prefers-color-scheme: dark)": {
          color: ds.colorPalette.white,
          background: "#232323",
        },
        "@media (prefers-color-scheme: light)": {
          ...border(1, "solid", "#232323"),
          color: ds.color.textLight,
          background: ds.colorPalette.white,
        },
      }}>
      prefers-color-scheme
    </div>
  );
};
