---
group: core
module: ds
name: reset
---

```jsx {9}
import { Global } from "@emotion/react";
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
