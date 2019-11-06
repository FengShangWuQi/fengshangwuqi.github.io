---
group: core
module: style
title: flex
---

import { Source } from "src-app/storybook/common/Source";

import { FlexDemo } from "./Flex";

<FlexDemo />

```jsx {2}
styled.div({
  ...flex({
    justifyContent: "center",
    alignItems: "center",
  }),
});
```

<Source path="src-core/style/flex.ts" />
