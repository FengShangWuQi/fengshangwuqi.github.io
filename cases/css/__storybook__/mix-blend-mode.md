---
group: cases
module: css
title: mix-blend-mode
---

import { Source } from "src-app/storybook/common/Source";

import { MixBlendModeDemo } from "./mix-blend-mode.stories";

<MixBlendModeDemo />

```jsx {2}
styled.div({
  mixBlendMode: "darken",
});
```

<Source path="cases/css/__storybook__/mix-blend-mode.stories.tsx" />
