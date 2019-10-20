---
group: core
module: react
title: pickElmAttrs
---

import { Source } from "src-app/storybook/common/Source";

```jsx {2}
const App = ({ ...otherprops }) => {
  return <div {...pickElmAttrs(otherProps)} />;
};
```

<Source path="src-core/react/pickElmAttrs.ts" />
