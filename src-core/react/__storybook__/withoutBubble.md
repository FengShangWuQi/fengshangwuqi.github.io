---
group: core
module: react
title: withoutBubble
---

import { Source } from "src-app/storybook/common/Source";

import { WithoutBubbleDemo } from "./withoutBubble.stories";

<WithoutBubbleDemo />

```jsx {1}
<a href="#!" onClick={withoutBubble(() => {})}>
  Link
</a>
```

<Source path="src-core/react/withoutBubble.ts" />
