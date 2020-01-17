---
group: core
module: hooks
title: useLocalStorage
---

import { Source } from "src-app/storybook/common/Source";

import { UseLocalStorageDemo } from "./useLocalStorage.stories";

<UseLocalStorageDemo />

```jsx
const [storedValue, setStoredValue] = useLocalStorage("count", 0);
```

<Source path="src-core/hooks/useLocalStorage.ts" />
