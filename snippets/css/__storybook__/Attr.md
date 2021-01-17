---
group: snippets
module: css
name: attr
---

import { Source } from "src-app/storybook/common/Source";

import { AttrDemo } from "./attr.stories";

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
  <Label htmlFor="A" data-tip="tip"></Label>
</Row>
```

<Source path="https://developer.mozilla.org/zh-CN/docs/Web/CSS/attr()" />
