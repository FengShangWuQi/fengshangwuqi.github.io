---
group: core
module: hooks
name: useVisibilitySensor
---

import { UseVisibilitySensorDemo } from "./useVisibilitySensor.stories";

<UseVisibilitySensorDemo />

```jsx
export const useVisibilitySensor = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit,
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      io.observe(ref.current);
    }

    return () => {
      io.disconnect();
    };
  }, []);

  return isIntersecting;
};
```

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver" />
