---
group: snippets
module: css
name: prefers-color-scheme
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

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media/prefers-color-scheme" />
