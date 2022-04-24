---
group: core
module: style
name: grid
---

import { GridDemo } from "./grid.stories";

<GridDemo />

```js {7}
export const grid = (gridOpts: CSSObject): CSSObject => ({
  display: "grid",
  ...gridOpts,
});

styled.div({
  ...grid({
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    gridAutoFlow: "row dense",
    gridGap: `${ds.spacing[5]}`,
  }),
});
```

<Source path="src-core/style/grid.ts" />
