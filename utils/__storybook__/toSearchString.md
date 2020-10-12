---
group: core
module: utils
name: toSearchString
---

import { Source } from "src-app/storybook/common/Source";

```js
import { stringify } from "querystring";

export type SearchQuery =
  | Record<string, string | number | boolean | string[] | number[] | boolean[]>
  | undefined;

export const toSearchString = (query: SearchQuery) => {
  const str = stringify(query);
  return str ? `?${str}` : "";
};
```

<Source path="utils/index.ts" />
