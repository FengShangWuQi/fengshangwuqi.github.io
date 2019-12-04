---
group: core
module: hooks
title: useWhyDidYouUpdate
---

import { Source } from "src-app/storybook/common/Source";

import { UseWhyDidYouUpdateDemo } from "./examples/useWhyDidYouUpdate";

<UseWhyDidYouUpdateDemo />

```jsx {4}
const ref = useRef(null);
const rect = useRect(ref);

useWhyDidYouUpdate("rect", rect);
```

<Source path="src-core/hooks/useWhyDidYouUpdate.ts" />
