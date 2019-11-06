---
group: cases
module: css
title: backface-visibility
---

import { Source } from "src-app/storybook/common/Source";

import { BackFaceVisibilityDemo } from "./examples/backface-visibility";

<BackFaceVisibilityDemo />

```jsx {7}
<div
  css={{
    ...position("relative"),
    transformStyle: "preserve-3d",
    "& div": {
      ...position("absolute"),
      backfaceVisibility: hidden ? "hidden" : "visible",
    },
  }}>
  ...
</div>
```

<Source path="cases/css/__storybook__/examples/backface-visibility.tsx" />
