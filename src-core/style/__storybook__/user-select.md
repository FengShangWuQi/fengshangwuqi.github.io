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
  "-moz-user-select": value,
  "-webkit-user-select": value,
  "-ms-user-select": value,
  "user-select": value,
});
```

<Source path="src-core/style/user-select.ts" />
