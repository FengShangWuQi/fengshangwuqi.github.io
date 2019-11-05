---
group: cases
module: css
title: Attr
---

import { Source } from "src-app/storybook/common/Source";

import { AttrDemo } from "../Attr";

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

<Source path="cases/css/Attr.tsx" />
