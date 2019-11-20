---
group: cases
module: react
title: useMemo
---

import { Source } from "src-app/storybook/common/Source";

import { UseMemoDemo } from "./examples/useMemo";

<UseMemoDemo />

```jsx
// 你会发现 expensiveFn 只执行了一次
const expensiveFn = () => {
    ...
};

const memoizedValue = useMemo(expensiveFn, []);
```

<Source path="cases/css/__storybook__/examples/useMemo.tsx" />
