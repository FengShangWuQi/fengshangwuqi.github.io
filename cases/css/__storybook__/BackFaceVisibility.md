---
group: cases
module: css
title: BackFaceVisibility
---

import { Source } from "src-app/storybook/common/Source";

import { BackFaceVisibilityDemo } from "../BackFaceVisibility";

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
  <div
    css={{
      transform: "rotateY(0deg) translateZ(25px)",
    }}>
    {hidden ? "hidden" : "visible"}
  </div>
  <div
    css={{
      transform: "rotateY(-180deg) translateZ(25px)",
    }}>
    backface
  </div>
</div>
```

<Source path="cases/css/BackFaceVisibility.tsx" />
