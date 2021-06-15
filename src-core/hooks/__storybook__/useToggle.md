---
group: core
module: hooks
name: useToggle
---

import { Source } from "src-app/storybook/common/Source";

import { UseToggleDemo } from "./useToggle.stories";

<UseToggleDemo />

```js
const useToggle = (defaultVal = false) => {
  const { on$, show, hide, toggle } = useMemo(() => {
    const on$ = new BehaviorSubject(defaultVal);

    return {
      on$,
      show: () => {
        on$.next(true);
      },
      hide: () => {
        on$.next(false);
      },
      toggle: () => {
        on$.next(!on$.value);
      },
    };
  }, []);

  const on = useObservable(on$);

  return [on, { show, hide, toggle }] as const;
};
```

<Source path="src-core/hooks/useToggle.ts" />
