---
group: core
module: style
name: fluidType
---

import { Source } from "src-app/storybook/common/Source";

import { FluidTypeDemo } from "./fluidType.stories";

<FluidTypeDemo />

```js {21}
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

styled.div({
  ...fluidType("md", "xl", 12, 16),
});
```

<Source path="src-core/style/fluidType.ts" />
