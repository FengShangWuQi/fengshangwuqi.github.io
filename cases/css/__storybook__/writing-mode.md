---
group: cases
module: css
name: writing-mode
---

import { Source } from "src-app/storybook/common/Source";

import { VerticalRl } from "./writing-mode.stories"

<VerticalRl />

```jsx {2}
styled.div({
  writingMode: "vertical-rl",
});
```

<Source path="cases/css/__storybook__/writing-mode.stories.tsx" />
