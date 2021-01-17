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
          background: ds.color.secondary,
        },
        "@media (prefers-color-scheme: light)": {
          ...border(1, "solid", ds.colorPalette.black),
          color: ds.color.secondary,
          background: ds.colorPalette.white,
        },
      }}>
      prefers-color-scheme
    </div>
  );
};
