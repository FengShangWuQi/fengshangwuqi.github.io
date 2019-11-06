---
group: cases
module: css
title: conic-gradient
---

import { Source } from "src-app/storybook/common/Source";

import { PieChart, Checkerboard, Starburst } from "./examples/conic-gradient";

<PieChart />

```jsx {4}
// pieChart
styled.div({
  background:
    "conic-gradient(from -40deg, #0088FE 0% 40%, #00C49F 40% 50%, #FFBB28 50% 70%, #FF8042 70% 100%)",
  borderRadius: "50%",
});
```

<Checkerboard />

```jsx {3}
// checkerboard
styled.div({
  background: "conic-gradient(white 25%, black 0 50%, white 0 75%, black 0)",
  backgroundSize: "32px 32px",
});
```

<Starburst />

```jsx {3}
// starburst
styled.div({
  background: `repeating-conic-gradient(#0ac 0 15deg, ${lighten(
    0.25,
    "#0ac",
  )} 0 30deg)`,
});
```

<Source path="cases/css/__storybook__/examples/conic-gradient.tsx" />
