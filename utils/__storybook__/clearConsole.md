---
group: core
module: utils
name: clearConsole
---

import { Source } from "src-app/storybook/common/Source";

```js
const clearConsole = () => {
  // 利用转义序列来做一些特殊的事情
  process.stdout.write(
    process.platform === "win32" ? "\x1B[2J\x1B[0f" : "\x1B[2J\x1B[3J\x1B[H",
  );
};
```

<Source path="https://github.com/facebook/create-react-app/blob/master/packages/react-dev-utils/clearConsole.js" />
