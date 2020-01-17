---
group: cases
module: react
title: useMemo
---

import { Source } from "src-app/storybook/common/Source";

import { UseMemoDemo } from "./useMemo.stories";

<UseMemoDemo />

```jsx
// 你会发现 expensiveFn 只执行了一次
const expensiveFn = () => {
    ...
};

const memoizedValue = useMemo(expensiveFn, []);
```

<Source path="cases/react/__storybook__/useMemo.stories.tsx" />
