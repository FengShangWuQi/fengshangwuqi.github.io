---
group: core
module: hooks
title: useToggle
---

import { Source } from "src-app/storybook/common/Source";

import { ToggleDemo } from "./useToggle.stories";

<ToggleDemo />

```jsx
export const useToggle = (defaultValue?: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = () => {
    return setValue(!value);
  };

  return [value, toggle];
};
```

<Source path="src-core/hooks/useToggle.ts" />
