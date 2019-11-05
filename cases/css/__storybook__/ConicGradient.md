---
group: cases
module: css
title: ConicGradient
---

import { Source } from "src-app/storybook/common/Source";

import { PieChart, Checkerboard, Starburst } from "../ConicGradient";

<PieChart />

```jsx {3}
const pieChart = styled.div({
  background:
    "conic-gradient(from -40deg, #0088FE 0% 40%, #00C49F 40% 50%, #FFBB28 50% 70%, #FF8042 70% 100%)",
  borderRadius: "50%",
});
```

<Checkerboard />

```jsx {2}
const checkerboard = styled.div({
  background: "conic-gradient(white 25%, black 0 50%, white 0 75%, black 0)",
  backgroundSize: "32px 32px",
});
```

<Starburst />

```jsx {2}
const starburst = styled.div({
  background: `repeating-conic-gradient(#0ac 0 15deg, ${lighten(
    0.25,
    "#0ac",
  )} 0 30deg)`,
});
```

<Source path="cases/css/ConicGradient.tsx" />
