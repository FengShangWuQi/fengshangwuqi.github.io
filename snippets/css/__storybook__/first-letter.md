---
group: snippets
module: css
name: first-letter
---

import { FirstLetterDemo } from "./first-letter.stories";

<FirstLetterDemo />

```jsx {2}
styled.div({
  "&::first-letter": {
    float: "left",
    fontSize: ds.size["5xl"],
    color: ds.color.secondary,
  },
});
```

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-letter" />
