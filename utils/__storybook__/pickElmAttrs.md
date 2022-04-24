---
group: core
module: utils
name: pickElmAttrs
---

```js {18}
// pickElmAttrs.ts
import isPropValid from "@emotion/is-prop-valid";

export const pickElmAttrs = (props: Record<string, any>) => {
  const p: Record<string, any> = {};

  Object.keys(props).forEach(key => {
    if (isPropValid(key)) {
      p[key] = props[key];
    }
  });

  return p;
};

// app.tsx
const App = ({ ...otherprops }) => {
  return <div {...pickElmAttrs(otherProps)} />;
};
```

<Source path="https://github.com/emotion-js/emotion/tree/master/packages/is-prop-valid" />
