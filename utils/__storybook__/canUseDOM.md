---
group: core
module: utils
title: canUseDOM
---

import { Source } from "src-app/storybook/common/Source";

```js
export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
```

<Source path="utils/index.ts" />
