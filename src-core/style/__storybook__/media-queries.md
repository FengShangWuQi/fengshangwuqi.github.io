---
group: core
module: style
title: media-queries
---

import { Source } from "src-app/storybook/common/Source";

import { MqDemo } from "./mq.stories";

<MqDemo />

```jsx
import facepaint from "facepaint";

export enum breakpoint {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
}
export type breakpointKey = keyof typeof breakpoint;

export const mq = (breakpoints: breakpointKey[], style: CSSObject) => {
  const selectors = breakpoints.map(
    bp => `@media (min-width: ${breakpoint[bp]}px)`,
  );
  const mq = facepaint(selectors);

  const dynamicStyle = mq(style);

  return dynamicStyle;
};
```

<Source path="src-core/style/mq.ts" />
