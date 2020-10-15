---
group: code
module: redux
name: combineReducers
---

import { Source } from "src-app/storybook/common/Source";

```js
const combineReducers = reducers => {
  const reducerKeys = Object.keys(reducers);
  let nextState = {};

  return (state, action) => {
    reducerKeys.forEach(key => {
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
    });

    return nextState;
  };
};
```

<Source path="code/redux/__storybook__/combineReducers.md" />
