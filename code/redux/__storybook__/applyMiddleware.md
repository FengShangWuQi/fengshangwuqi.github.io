---
group: code
module: redux
name: applyMiddleware
---

import { Source } from "src-app/storybook/common/Source";

```js
const applyMiddleware = (...middlewares) => {
  return createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState);

    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const chain = middlewares.map(middleware => middleware(middlewareAPI));
    const dispatch = compose(...chain)(store.dispatch);

    return {
      ...store,
      dispatch,
    };
  };
};
```

<Source path="code/redux/__storybook__/applyMiddleware.md" />
