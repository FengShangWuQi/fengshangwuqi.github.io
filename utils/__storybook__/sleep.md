---
group: core
module: utils
title: sleep
---

import { Source } from "src-app/storybook/common/Source";

```js
export const sleep = async (interval: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};
```

<Source path="utils/index.ts" />
