---
group: core
module: hooks
title: useDebounce
---

import { Source } from "src-app/storybook/common/Source";

import { UseDebounceDemo } from "./useDebounce.stories";

<UseDebounceDemo />

```jsx {2}
const [count] = useState(0);
const debounceCount = useDebounce(count, 200);
```

<Source path="src-core/hooks/useDebounce.ts" />
