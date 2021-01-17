---
group: core
module: style
name: mq
---

import { Source } from "src-app/storybook/common/Source";

import { MqDemo } from "./mq.stories";

<MqDemo />

```js {22}
import facepaint from "facepaint";

enum breakpoint {
  sm = 640,
  md = 768,
  lg = 1024,
  xl = 1280,
}
type breakpointKey = keyof typeof breakpoint;

export const mq = (breakpoints: breakpointKey[], style: CSSObject) => {
  const selectors = breakpoints.map(
    bp => `@media (min-width: ${breakpoint[bp]}px)`,
  );
  const mq = facepaint(selectors);

  const dynamicStyle = mq(style);

  return dynamicStyle;
};

styled.div(mq(["lg"], {
  color: [ds.color.secondary, ds.color.text],
}))
```

<Source path="https://github.com/emotion-js/facepaint" />
