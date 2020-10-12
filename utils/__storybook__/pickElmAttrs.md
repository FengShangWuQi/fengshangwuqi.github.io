---
group: core
module: utils
name: pickElmAttrs
---

import { Source } from "src-app/storybook/common/Source";

```js {19}
// pickElmAttrs.ts
import isPropValid from "@emotion/is-prop-valid";

export const pickElmAttrs = (props: Record<string, any>) => {
  const p: Record<string, any> = {};

  Object.keys(props).forEach(key => {
    if (isPropValid(key)) {
      p[key] = props[key];
    }
  });

  return p;
};

// app.tsx
const App = ({ ...otherprops }) => {
  return <div {...pickElmAttrs(otherProps)} />;
};
```

<Source path="utils/index.ts" />
