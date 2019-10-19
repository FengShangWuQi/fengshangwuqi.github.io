---
group: components
module: toggles
title: Toggle
---

import { Source } from "src-app/storybook/common/Source";

import { BaseToggle, ToggleWithLabel, ToggleWithIcon, DisabledToggle } from "./Toggle";

<BaseToggle />

```jsx
// base toggle
<Toggle />
```

<ToggleWithIcon />

```jsx
// toggle with icon
<Toggle
  css={{
    background: "#0f1114",
  }}
  icons={{
    checked: <img src={require("../images/moon.png")} width="16" height="16" />,
    unchecked: (
      <img src={require("../images/sun.png")} width="16" height="16" />
    ),
  }}
  onChange={toggleTheme}
/>
```

<ToggleWithLabel />

```jsx
// toggle with label
<div>
  <Toggle id="xx" />
  <label htmlFor="xx">label</label>
</div>
```

<DisabledToggle />

```jsx
// disabled toggle
<Toggle defaultChecked={true} disabled />
```

<Source path="src-components/toggles/Toggle.tsx" />
