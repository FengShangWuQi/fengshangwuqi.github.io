---
group: core
module: style
name: user-select
---

import { UserSelectDemo } from "./user-select.stories";

<UserSelectDemo />

```js
export const userSelect = (
  value: "auto" | "text" | "none" | "contain" | "all",
): CSSObject => ({
  MozUserSelect: value,
  WebkitUserSelect: value,
  MsUserSelect: value,
  UserSelect: value,
});
```

<Source path="src-core/style/user-select.ts" />
