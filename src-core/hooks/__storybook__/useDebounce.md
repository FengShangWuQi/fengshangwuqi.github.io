---
group: core
module: hooks
title: useDebounce
---

import { Source } from "src-app/storybook/common/Source";

import { UseDebounceDemo } from "./useDebounce.stories";

<UseDebounceDemo />

```jsx
export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState < T > value;

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutID);
    };
  }, [value, delay]);

  return debouncedValue;
};
```

<Source path="src-core/hooks/useDebounce.ts" />
