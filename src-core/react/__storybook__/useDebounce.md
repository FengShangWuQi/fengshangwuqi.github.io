---
group: core
module: react
title: useDebounce
---

import { Source } from "src-app/storybook/common/Source";

import { UseDebounceDemo } from "./examples/useDebounce";

<UseDebounceDemo />

```jsx {2}
const [count] = useState(0);
const debounceCount = useDebounce(count, 200);
```

<Source path="src-core/react/useDebounce.ts" />
