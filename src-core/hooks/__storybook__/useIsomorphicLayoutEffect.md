---
group: core
module: hooks
name: useIsomorphicLayoutEffect
---

import { Source } from "src-app/storybook/common/Source";

```ts
/*
 * use useIsomorphicLayoutEffect in place of useLayoutEffect to avoid SSR warning
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
```

<Source path="src-core/hooks/useIsomorphicLayoutEffect.ts" />
