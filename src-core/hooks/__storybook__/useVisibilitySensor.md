---
group: core
module: hooks
title: useVisibilitySensor
---

import { Source } from "src-app/storybook/common/Source";

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

<Source path="src-core/hooks/useVisibilitySensor.ts" />
