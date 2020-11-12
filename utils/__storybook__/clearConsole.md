---
group: core
module: utils
name: clearConsole
---

import { Source } from "src-app/storybook/common/Source";

```js
const clearConsole = () => {
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H",
  );
};
```

<Source path="utils/clearConsole.ts" />
