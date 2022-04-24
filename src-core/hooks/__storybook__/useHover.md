---
group: core
module: hooks
name: useHover
---

import { UseHoverDemo } from "./useHover.stories";

<UseHoverDemo />

```jsx
export const useHover = <T = any>(): [RefObject<T>, boolean] => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(null);

  useEffect(() => {
    const node = hoverRef.current;

    if (!node) {
      return;
    }

    const mouseover$ = fromEvent(node, "mouseover").subscribe(() =>
      setIsHovered(true),
    );
    const mouseout$ = fromEvent(node, "mouseout").subscribe(() =>
      setIsHovered(false),
    );

    return () => {
      mouseover$.unsubscribe();
      mouseout$.unsubscribe();
    };
  }, [hoverRef.current]);

  return [hoverRef, isHovered];
};
```

<Source path="src-core/hooks/useHover.ts" />
