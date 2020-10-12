---
group: core
module: utils
name: parseSearchString
---

import { Source } from "src-app/storybook/common/Source";

```js
import { parse } from "querystring";

export const parseSearchString = (search: string) => {
  if (search.startsWith("?")) {
    return parse(search.slice(1));
  }

  return parse(search);
};
```

<Source path="utils/index.ts" />
