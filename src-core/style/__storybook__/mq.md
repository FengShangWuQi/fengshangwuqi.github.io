---
group: core
module: style
title: mq
---

import { Source } from "src-app/storybook/common/Source";

import { MqDemo } from "./examples/mq";

<MqDemo />

```jsx {2}
styled.div(
  mq(["lg"], {
    color: [ds.color.text, ds.colorPalette.teal[500]],
  }),
);
```

<Source path="src-core/style/mq.ts" />
