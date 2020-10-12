---
group: cases
module: css
title: backface-visibility
---

import { Source } from "src-app/storybook/common/Source";

import { BackFaceVisibilityDemo } from "./backface-visibility.stories";

<BackFaceVisibilityDemo />

```jsx {7}
<div
  css={{
    ...position("relative"),
    transformStyle: "preserve-3d",
    "& > div": {
      ...position("absolute"),
      backfaceVisibility: hidden ? "hidden" : "visible",
    },
  }}>
  <div css={{ transform: "rotateY(-180deg) translateZ(25px)" }}>backface</div>
  <div>visible</div>
</div>
```

<Source path="cases/css/__storybook__/backface-visibility.stories.tsx" />
