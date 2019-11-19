---
group: core
module: style
title: Fluid Typography
---

import { Source } from "src-app/storybook/common/Source";

import { FluidTypeDemo } from "./examples/fluidType";

<FluidTypeDemo />

```jsx {2}
styled.div({
  ...fluidType("md", "xl", 12, 16),
});
```

<Source path="src-core/style/fluidType.ts" />
