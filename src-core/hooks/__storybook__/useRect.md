---
group: core
module: hooks
name: useRect
---

import { UseRectDemo } from "./useRect.stories";

<UseRectDemo />

```js
export const getRect = (targetElm: Element, relatedElm: Element): IRect => {
  const targetRect = targetElm.getBoundingClientRect();
  const relatedRect = relatedElm.getBoundingClientRect();

  return {
    top: (targetRect.top || 0) - relatedRect.top,
    left: (targetRect.left || 0) - relatedRect.left,
    width: targetRect.width || 0,
    height: targetRect.height || 0,
  };
};

export const useRect = (
  elmRef: RefObject<Element | null>,
): [IRect, () => void] => {
  const [rect, setRect] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const refreshRect = useCallback(() => {
    if (elmRef.current) {
      setRect(getRect(elmRef.current, document.body));
    }
  }, []);

  useEffect(() => {
    refreshRect();
  }, []);

  useEffect(() => {
    const resize$ = fromEvent(globalThis, "resize");
    const orientationchange$ = fromEvent(globalThis, "orientationchange");

    const sub = observableMerge(resize$, orientationchange$)
      .pipe(observeOn(animationFrameScheduler), debounceTime(200))
      .subscribe(refreshRect);

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return [rect, refreshRect];
};
```

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect" />
