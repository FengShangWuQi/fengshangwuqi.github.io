---
group: code
module: redux
name: createStore
---

import { Source } from "src-app/storybook/common/Source";

```js
const createStore = (reducer, preloadedState, enhancer) => {
  const currentState = preloadedState;
  let listeners = [];

  if (enhancer) {
    return enhancer(createStore)(reducer, preloadedState);
  }

  return {
    getState() {
      return currentState;
    },
    dispatch(action) {
      currentState = reducer(currentState, action);

      listeners.forEach(listener => {
        listener();
      });
    },
    subscribe(newListener) {
      listeners.push(newListener);

      const unsubscribe = () => {
        listeners = listeners.filter(l => l !== newListener);
      };

      return unsubscribe;
    },
  };
};
```

<Source path="code/redux/__storybook__/createStore.md" />
