---
group: core
module: ds
title: useDesignSystem
---

import { Source } from "src-app/storybook/common/Source";

```jsx {2}
const App = () => {
  const ds = useDesignSystem();

  return <div css={{ background: ds.color.primary }} />;
};
```

<Source path="src-core/ds/useDesignSystem.ts" />
