---
group: core
module: utils
name: withoutBubble
---

import { Source } from "src-app/storybook/common/Source";

import { WithoutBubbleDemo } from "./withoutBubble.stories";

<WithoutBubbleDemo />

```js
export const withoutBubble = (cb: () => void) => (e: React.SyntheticEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  cb();
};
```

<Source path="utils/index.ts" />
