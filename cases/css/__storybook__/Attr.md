---
group: cases
module: css
title: attr
---

import { Source } from "src-app/storybook/common/Source";

import { AttrDemo } from "./examples/attr";

<AttrDemo />

```jsx {7}
<Row>
  <Radio
    name="answer"
    id="A"
    css={{
      "&+label::after": {
        content: "attr(data-tip)",
        display: "none",
      },
      "&:checked+label::after": {
        display: "inline",
      },
    }}></Radio>
  <Label htmlFor="A" data-tip="tip">
    选我
  </Label>
</Row>
```

<Source path="cases/css/__storybook__/examples/attr.tsx" />
