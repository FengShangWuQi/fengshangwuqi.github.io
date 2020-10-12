---
group: core
module: hooks
name: useObservable
---

import { Source } from "src-app/storybook/common/Source";

import { UseObservableDemo } from "./useObservable.stories";

<UseObservableDemo />

```jsx
export const useObservable = <T>(ob$: Observable<T>, defaultValue: T): T => {
  const [value, setValue] = useState < T > defaultValue;

  useEffect(() => {
    const sub = ob$.subscribe(setValue);

    return () => {
      sub.unsubscribe();
    };
  }, [ob$]);

  return value;
};
```

<Source path="src-core/hooks/useObservable.ts" />
