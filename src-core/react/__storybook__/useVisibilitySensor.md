---
group: core
module: react
title: useVisibilitySensor
---

import { Source } from "src-app/storybook/common/Source";

import { UseVisibilitySensorDemo } from "./useVisibilitySensor";

<UseVisibilitySensorDemo />

```jsx {4}
const rootRef = useRef(null);
const footerRef = useRef(null);

const isVisible = useVisibilitySensor(footerRef, {
  root: rootRef.current,
});
```

<Source path="src-core/react/useVisibilitySensor.ts" />
