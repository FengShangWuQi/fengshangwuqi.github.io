---
group: core
module: ds
name: useDesignSystem
---

```js {6,11}
// useDesignSystem.ts
import { ThemeContext } from "@emotion/react";
import { ITheme } from "./defaultTheme";

export const useDesignSystem = () => {
  return useContext(ThemeContext as Context<ITheme>);
};

// app.tsx
const App = () => {
  const ds = useDesignSystem();

  return <div css={{ background: ds.color.primary }} />;
};
```

<Source path="src-core/ds/useDesignSystem.ts" />
