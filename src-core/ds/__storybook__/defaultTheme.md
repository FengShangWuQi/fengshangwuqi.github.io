---
group: core
module: ds
name: defaultTheme
---

import { DefaultThemeDemo } from "./defaultTheme.stories";

```jsx {7}
// defaultTheme.ts
const color = {
  primary: colorPalette.blue[500],
  secondary: rgba(colorPalette.blue[500], 0.85),
};

export const defaultTheme = {
  color,
  colorPalette,
};

// Layout.tsx
const storybookTheme = produce(defaultTheme, theme => {
  theme.color.primary = "#c2185b";
  theme.color.secondary = rgba("#c2185b", 0.85);
  theme.color.bg = "#fafafa";
});
```

<DefaultThemeDemo />

<Source path="src-core/ds/defaultTheme.ts" />
