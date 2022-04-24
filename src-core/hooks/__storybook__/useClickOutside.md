---
group: core
module: hooks
name: useClickOutside
---

import { UseClickOutsideDemo } from "./useClickOutside.stories";

<UseClickOutsideDemo />

```jsx
export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const handleClick = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    const click$ = fromEvent(document, "click").subscribe(handleClick);

    return () => {
      click$.unsubscribe();
    };
  }, [ref, handler]);
};
```

<Source path="src-core/hooks/useClickOutside.ts" />
