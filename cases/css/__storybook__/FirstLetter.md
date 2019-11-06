---
group: cases
module: css
title: FirstLetter
---

import { Source } from "src-app/storybook/common/Source";

import { FirstLetterDemo } from "../FirstLetter";

<FirstLetterDemo />

```jsx {2}
const FirstLetter = styled.div({
  "&::first-letter": {
    float: "left",
    fontSize: ds.size.xxl,
    color: "#cd5c5c",
  },
});
```

<Source path="cases/css/FirstLetter.tsx" />
