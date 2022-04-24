---
group: snippets
module: css
name: backface-visibility
---

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

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/CSS/backface-visibility" />
