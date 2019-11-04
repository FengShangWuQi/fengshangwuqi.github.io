---
group: components
module: navigation
title: Menu
---

import { Source } from "src-app/storybook/common/Source";

import { HorizontalMenu, RightMenu, VerticalMenu } from "./Menu";

<HorizontalMenu />

```jsx
// menu with default horizontal mode
<Menu>
  <MenuItems />
</Menu>
```

<RightMenu />

```jsx
// right menu
<Menu right>
  <MenuItems />
</Menu>
```

<VerticalMenu />

```jsx
// menu with vertical mode
<Menu mode={MenuMode.VERTICAL}>
  <MenuItems />
</Menu>
```

<Source path="src-components/navigation/menus/Menu.tsx" />
