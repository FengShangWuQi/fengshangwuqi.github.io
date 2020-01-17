---
group: cases
module: css
title: prefers-color-scheme
---

import { Source } from "src-app/storybook/common/Source";

import { PrefersColorSchemeDemo } from "./prefers-color-scheme.stories"

<PrefersColorSchemeDemo />

```jsx {2}
styled.div({
  "@media (prefers-color-scheme: dark)": {},
  "@media (prefers-color-scheme: light)": {},
});
```

<Source path="cases/css/__storybook__/examples/prefers-color-scheme.tsx" />
