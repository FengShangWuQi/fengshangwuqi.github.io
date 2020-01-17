---
group: core
module: hooks
title: useRect
---

import { Source } from "src-app/storybook/common/Source";

import { UseRectDemo } from "./useRect.stories";

<UseRectDemo />

```jsx {2}
const ref = useRef(null);
const rect = useRect(ref);

const { left, top, width, height } = rect;
```

<Source path="src-core/hooks/useRect.ts" />
