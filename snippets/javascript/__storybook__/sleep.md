---
group: snippets
module: javascript
name: sleep
---

import { Source } from "src-app/storybook/common/Source";

```js
export const sleep = async (interval: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  });
};
```

<Source path="snippets/javascript/__storybook__/sleep.md" />
