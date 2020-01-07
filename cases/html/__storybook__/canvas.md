---
group: cases
module: html
title: canvas
---

import { Source } from "src-app/storybook/common/Source";

import { BarrageDemo, StarsDemo } from "./examples/canvas";

<StarsDemo  />

```jsx
<Stars width={rect.width} height={rect.height} />
```

<BarrageDemo  />

```jsx
<Barrage width={rect.width} height={rect.height} data={data} />
```

<Source path="cases/html/__storybook__/examples/canvas.tsx" />
