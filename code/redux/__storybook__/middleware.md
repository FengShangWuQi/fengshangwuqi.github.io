---
group: code
module: redux
name: middleware
---

import { Source } from "src-app/storybook/common/Source";

```js
const middlewareOne = store => next => action => {
  console.log("middleware start");
  let result = next(action);
  console.log("middleware end");
  return result;
};
```

<Source path="code/redux/__storybook__/middleware.md" />
