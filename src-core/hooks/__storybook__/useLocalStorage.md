---
group: core
module: hooks
name: useLocalStorage
---

import { Source } from "src-app/storybook/common/Source";

import { UseLocalStorageDemo } from "./useLocalStorage.stories";

<UseLocalStorageDemo />

```js
export const useLocalStorage = <T>(
  key: string,
  initialValue?: T,
): [T, (value: any) => void] => {
  const [storedValue, setStoredValue] =
    useState <
    T >
    (() => {
      try {
        const item = globalThis.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (err) {
        console.error(err);
        return initialValue;
      }
    });

  const updateStoredValue = (value: any) => {
    try {
      const newStoredValue = isFunction(value) ? value(storedValue) : value;
      setStoredValue(newStoredValue);
      globalThis.localStorage.setItem(key, JSON.stringify(newStoredValue));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, updateStoredValue];
};
```

<Source path="src-core/hooks/useLocalStorage.ts" />
