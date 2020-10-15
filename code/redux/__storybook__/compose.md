---
group: code
module: redux
name: compose
---

import { Source } from "src-app/storybook/common/Source";

```js
const compose = (...funcs) => {
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
};
```

<Source path="code/redux/__storybook__/compose.md" />
