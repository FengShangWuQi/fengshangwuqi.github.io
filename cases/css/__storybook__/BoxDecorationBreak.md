---
group: cases
module: css
title: BoxDecorationBreak
---

import { Source } from "src-app/storybook/common/Source";

import { BoxDecorationBreakDemo } from "../BoxDecorationBreak"

<BoxDecorationBreakDemo />

```jsx {6}
const BoxDecorationBreak = styled.div({
  backgroundImage: "linear-gradient(135deg, deeppink, dodgerblue, yellowgreen)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
  boxDecorationBreak: "clone",
});
```

<Source path="cases/css/BoxDecorationBreak.tsx" />
