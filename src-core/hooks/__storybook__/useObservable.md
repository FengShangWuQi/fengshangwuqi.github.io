---
group: core
module: hooks
name: useObservable
---

import { UseObservableDemo } from "./useObservable.stories";

<UseObservableDemo />

```jsx
type ObservableValueType<T> = T extends Observable<infer U> ? U : never;

export const useObservable = <T extends Observable<any>>(ob$: T) => {
  const [value, setValue] = useState<ObservableValueType<T>>(
    (ob$ as any).value,
  );

  useEffect(() => {
    const sub = ob$.subscribe(setValue);

    return () => {
      sub.unsubscribe();
    };
  }, [ob$]);

  return value;
};
```

<Source path="https://rxjs-dev.firebaseapp.com/api/index/class/Observable" />
