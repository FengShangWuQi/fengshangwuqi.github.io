---
group: cases
module: css
title: first-letter
---

import { Source } from "src-app/storybook/common/Source";

import { FirstLetterDemo } from "./examples/first-letter";

<FirstLetterDemo />

```jsx {2}
styled.div({
  "&::first-letter": {
    float: "left",
    fontSize: ds.size["5xl"],
    color: "#cd5c5c",
  },
});
```

<Source path="cases/css/__storybook__/examples/first-letter.tsx" />
