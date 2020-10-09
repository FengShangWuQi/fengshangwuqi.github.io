---
group: core
module: ds
title: reset
---

import { Source } from "src-app/storybook/common/Source";

```jsx {12}
import React from "react";
import { Global } from "@emotion/core";
import { normalize } from "polished";

import { useDesignSystem } from "src-core/ds";

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
