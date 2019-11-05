---
group: cases
module: css
title: MixBlendMode
---

import { Source } from "src-app/storybook/common/Source";

import { MixBlendModeDemo } from "../MixBlendMode";

<MixBlendModeDemo />

```jsx {2}
const MixBlendMode = styled.div({
  mixBlendMode: "darken",
});
```

<Source path="cases/css/MixBlendMode.tsx" />
