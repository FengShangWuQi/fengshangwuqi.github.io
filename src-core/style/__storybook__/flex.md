---
group: core
module: style
title: flex
---

import { Source } from "src-app/storybook/common/Source";

import { FlexDemo } from "./flex.stories";

<FlexDemo />

```js {12}
export const flex = (flexOpts: CSSObject): CSSObject => ({
  display: "flex",
  ...flexOpts,
});

export const inlineFlex = (flexOpts: CSSObject): CSSObject => ({
  display: "inline-flex",
  ...flexOpts,
});

styled.div({
  ...flex({
    justifyContent: "center",
    alignItems: "center",
  }),
});
```

<Source path="src-core/style/flex.ts" />
