---
group: cases
module: rxjs
title: observeOn
---

import { Source } from "src-app/storybook/common/Source";

import { ProgressBar, ProgressBarWithAnimationFrame } from "./observeOn.stories";

<ProgressBar />

with animationFrame

<ProgressBarWithAnimationFrame />

```jsx
intervals.pipe(observeOn(animationFrameScheduler)).subscribe(val => {
  setWidth(width + val);
});
```

<Source path="cases/rxjs/__storybook__/observeOn.stories.tsx" />
