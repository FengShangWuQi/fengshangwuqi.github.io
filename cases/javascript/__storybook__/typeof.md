---
group: cases
module: javascript
title: typeof
---

import { Source } from "src-app/storybook/common/Source";

```js
typeof 123; // "number"
typeof "abc"; // "string"
typeof false; // "boolean"

typeof function () {}; // "function"
typeof []; // "object"

typeof undefined; // "undefined"

typeof null; // "object"
```

<Source path="cases/javascript/__storybook__/typeof.md" />
