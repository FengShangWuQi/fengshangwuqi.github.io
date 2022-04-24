---
group: core
module: utils
name: search
---

```js
import { parse, stringify } from "querystring";

type SearchQuery = Record<
  string,
  | string
  | number
  | boolean
  | ReadonlyArray<string>
  | ReadonlyArray<number>
  | ReadonlyArray<boolean>
  | null,
>;

export const toSearchString = (query: SearchQuery) => {
  const str = stringify(query);
  return str ? `?${str}` : "";
};

export const parseSearchString = (search: string) => {
  if (search.startsWith("?")) {
    return parse(search.slice(1));
  }

  return parse(search);
};
```

<Source path="https://nodejs.org/api/querystring.html" />
