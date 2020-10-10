---
group: core
module: style
title: grid
---

import { Source } from "src-app/storybook/common/Source";

import { GridDemo } from "./grid.stories";

<GridDemo />

```js
export const grid = (gridOpts: CSSObject): CSSObject => ({
  display: "grid",
  ...gridOpts,
});
```

<Source path="src-core/style/grid.ts" />
