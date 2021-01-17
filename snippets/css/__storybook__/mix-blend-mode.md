---
group: snippets
module: css
name: mix-blend-mode
---

import { Source } from "src-app/storybook/common/Source";

import { MixBlendModeDemo } from "./mix-blend-mode.stories";

<MixBlendModeDemo />

```jsx {2}
styled.div({
  mixBlendMode: "darken",
});
```

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/CSS/mix-blend-mode" />
