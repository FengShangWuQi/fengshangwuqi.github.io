---
group: cases
module: rxjs
title: timer
---

import { Source } from "src-app/storybook/common/Source";

import { DueTime, PeriodOrScheduler } from "./examples/timer";

<DueTime />

```jsx
timer(2000).subscribe(() => setCount(1));
```

<PeriodOrScheduler />

```jsx
const numbers = timer(2000, 1000);
const sub = numbers.subscribe(setCount);
```

<Source path="cases/rxjs/__storybook__/examples/timer.tsx" />
