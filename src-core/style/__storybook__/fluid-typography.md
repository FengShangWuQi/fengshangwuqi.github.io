---
group: core
module: style
title: fluid-typography
---

import { Source } from "src-app/storybook/common/Source";

import { FluidTypeDemo } from "./fluidType.stories";

<FluidTypeDemo />

```jsx {2}
styled.div({
  ...fluidType("md", "xl", 12, 16),
});
```

<Source path="src-core/style/fluidType.ts" />
