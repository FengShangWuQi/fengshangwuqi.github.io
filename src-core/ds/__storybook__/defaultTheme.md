---
group: core
module: ds
title: defaultTheme
---

import { Source } from "src-app/storybook/common/Source";

import { DefaultThemeDemo } from "./defaultTheme.stories";

```jsx {6}
const color = {
  primary: colorPalette.blue[500],
  secondary: rgba(colorPalette.blue[500], 0.85),
};

export const defaultTheme = {
  color,
  colorPalette,
};
```

<DefaultThemeDemo />

<Source path="src-core/ds/defaultTheme.ts" />
