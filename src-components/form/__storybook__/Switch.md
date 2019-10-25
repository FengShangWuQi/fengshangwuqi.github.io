---
group: components
module: form
title: Switch
---

import { Source } from "src-app/storybook/common/Source";

import { BaseSwitch, SwitchWithLabel, SwitchWithIcon, DisabledSwitch } from "./Switch";

<BaseSwitch />

```jsx
// base Switch
<Switch />
```

<SwitchWithIcon />

```jsx
// Switch with icon
<Switch
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

<SwitchWithLabel />

```jsx
// Switch with label
<div>
  <Switch id="xx" />
  <label htmlFor="xx">label</label>
</div>
```

<DisabledSwitch />

```jsx
// disabled Switch
<Switch defaultChecked={true} disabled />
```

<Source path="src-components/form/Switch.tsx" />
