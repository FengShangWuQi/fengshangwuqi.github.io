---
group: cases
module: javascript
title: globalThis
---

import { Source } from "src-app/storybook/common/Source";
import { Log } from "./globalThis.story";

<Log />

```js {13}
// A naive attempt at getting the global `this`. Don’t use this!
const getGlobalThis = () => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  // Note: this might still return the wrong result!
  if (typeof this !== "undefined") return this;
  throw new Error("Unable to locate global `this`");
};
const theGlobalThis = getGlobalThis();

const theGlobalThis = globalThis;
```

<Source path="cases/javascript/__storybook__/globalThis.md" />
