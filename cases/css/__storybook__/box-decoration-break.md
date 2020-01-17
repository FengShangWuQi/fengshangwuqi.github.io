---
group: cases
module: css
title: box-decoration-break
---

import { Source } from "src-app/storybook/common/Source";

import { BoxDecorationBreakDemo } from "./box-decoration-break.stories"

<BoxDecorationBreakDemo />

```jsx {5}
styled.div({
  backgroundImage: "linear-gradient(135deg, deeppink, dodgerblue, yellowgreen)",
  backgroundClip: "text",
  color: "transparent",
  boxDecorationBreak: "clone",
});
```

<Source path="cases/css/__storybook__/box-decoration-break.md" />
