---
group: core
module: react
title: useDebounce
---

import { Source } from "src-app/storybook/common/Source";

import { DebounceCounter } from "./useDebounce";

<DebounceCounter />

```jsx
const [count] = useState(0);
const debounceCount = useDebounce(count, 200);
```

<Source path="src-core/react/useDebounce.ts" />
