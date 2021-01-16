---
group: core
module: utils
name: canUseDOM
---

import { Source } from "src-app/storybook/common/Source";

```js
export const canUseDOM = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
```

<Source path="https://github.com/akiran/can-use-dom/blob/master/index.js" />
