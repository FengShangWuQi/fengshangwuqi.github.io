---
group: core
module: react
title: useLocalStorage
---

import { Source } from "src-app/storybook/common/Source";

import { UseLocalStorageDemo } from "./examples/useLocalStorage";

<UseLocalStorageDemo />

```jsx
const [storedValue, setStoredValue] = useLocalStorage("count", 0);
```

<Source path="src-core/react/useLocalStorage.ts" />
