---
group: core
module: ds
title: reset
---

import { Source } from "src-app/storybook/common/Source";

```jsx {9}
import { Global } from "@emotion/core";
import { normalize } from "polished";

export const DSReset = () => {
  const ds = useDesignSystem();

  return (
    <>
      <Global styles={{ ...normalize() }} />

      <Global
        styles={{
          a: {
            color: `${ds.color.primary}`,
            textDecoration: "none",
          },
        }}
      />
    </>
  );
};
```

<Source path="src-core/ds/reset.tsx" />
