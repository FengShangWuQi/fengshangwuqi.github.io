---
group: cases
module: css
title: Attr
---

import { Source } from "src-app/storybook/common/Source";

import { AttrDemo } from "../Attr";

<AttrDemo />

```jsx
<div>
  <div>100、答题挺辛苦，这道题就送给你了</div>

  <Row>
    <Radio name="100" id="100-A"></Radio>
    <Label htmlFor="100-A" data-tip="✔︎ perfect">
      正确答案，请选我
    </Label>
  </Row>
  <Row>
    <Radio name="100" id="100-B"></Radio>
    <Label htmlFor="100-B" data-tip="✘ sad">
      错误答案
    </Label>
  </Row>
</div>
```

<Source path="src-components/css/Attr.tsx" />
