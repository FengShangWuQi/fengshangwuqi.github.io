import { CSSObject } from "@emotion/core";

import { breakpoint, breakpointKey } from "src-core/ds";

export const fluidType = (
  minVw: breakpointKey,
  maxVw: breakpointKey,
  minFontSize: number,
  maxFontSize: number,
): CSSObject => ({
  fontSize: minFontSize,
  [`@media (min-width: ${breakpoint[minVw]}px)`]: {
    fontSize: `calc(${minFontSize}px + (${
      maxFontSize - minFontSize
    }) * (100vw - ${breakpoint[minVw]}px) / (${
      breakpoint[maxVw] - breakpoint[minVw]
    }))`,
  },
  [`@media (min-width: ${breakpoint[maxVw]}px)`]: {
    fontSize: maxFontSize,
  },
});
