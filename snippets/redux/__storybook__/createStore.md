---
group: snippets
module: redux
name: createStore
---

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

<Source path="https://github.com/reduxjs/redux/blob/master/src/createStore.ts" />
