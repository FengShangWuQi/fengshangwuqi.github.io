---
group: core
module: ds
title: useDesignSystem
---

import { Source } from "src-app/storybook/common/Source";

```js {6,11}
// useDesignSystem.ts
import { ThemeContext } from "@emotion/core";
import { ITheme } from "./defaultTheme";

export const useDesignSystem = () => {
  return useContext(ThemeContext as Context<ITheme>);
};

// APP.tsx
const App = () => {
  const ds = useDesignSystem();

  return <div css={{ background: ds.color.primary }} />;
};
```

<Source path="src-core/ds/useDesignSystem.ts" />
