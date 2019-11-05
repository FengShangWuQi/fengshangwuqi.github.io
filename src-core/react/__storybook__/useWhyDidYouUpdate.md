---
group: core
module: react
title: useWhyDidYouUpdate
---

import { Source } from "src-app/storybook/common/Source";

import { UseWhyDidYouUpdateDemo } from "./useWhyDidYouUpdate";

<UseWhyDidYouUpdateDemo />

```jsx {4}
const ref = useRef(null);
const rect = useRect(ref);

useWhyDidYouUpdate("rect", rect);
```

<Source path="src-core/react/useWhyDidYouUpdate.ts" />
