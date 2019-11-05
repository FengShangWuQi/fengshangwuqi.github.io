---
group: cases
module: css
title: ConicGradient
---

import { Source } from "src-app/storybook/common/Source";

import { PieChart, Checkerboard, Starburst } from "../ConicGradient";

<PieChart />

```css {2}
.pieChart {
  background: "conic-gradient(from -40deg, #0088FE 0% 40%, #00C49F 40% 50%, #FFBB28 50% 70%, #FF8042 70% 100%)";
}
```

<Checkerboard />

```css {2}
.checkerboard {
  background: "conic-gradient(white 25%, black 0 50%, white 0 75%, black 0)";
  backgroundsize: "32px 32px";
}
```

<Starburst />

```css
.starburst {
  background: "repeating-conic-gradient(#0ac 0 15deg, #4de1ff 0 30deg)";
}
```

<Source path="cases/css/ConicGradient.tsx" />
