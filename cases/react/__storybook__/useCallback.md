---
group: cases
module: react
title: useCallback
---

import { Source } from "src-app/storybook/common/Source";

import { UseCallbackDemo } from "./examples/useCallback";

<UseCallbackDemo />

```jsx
/*
 * useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
 * 当点击按钮的时候子组件不会重新渲染
 */
const Parent = () => {
  const handleClick = () => {};

  const memoizedCallback = useCallback(handleClick, []);

  return (
    <div>
      <button onClick={toggleValue}>click</button>
      <Child onClick={memoizedCallback} />
    </div>
  );
};

const Child = React.memo(({}: { onClick: () => void }) => null);
```

<Source path="cases/react/__storybook__/examples/useCallback.tsx" />
