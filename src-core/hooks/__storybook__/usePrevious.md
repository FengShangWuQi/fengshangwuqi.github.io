---
group: core
module: hooks
title: usePrevious
---

import { Source } from "src-app/storybook/common/Source";

import { UsePreviousDemo } from "./examples/usePrevious";

<UsePreviousDemo />

```jsx {2}
const [count] = useState(0);
const prevCount = usePrevious(count);
```

<Source path="src-core/hooks/usePrevious.ts" />
