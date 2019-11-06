---
group: core
module: react
title: useRequest
---

import { Source } from "src-app/storybook/common/Source";

import { UseRequestDemo } from "./examples/useRequest";

<UseRequestDemo />

```jsx {1}
const [request, requesting] = useRequest(
  {
    url,
  },
  {
    onSuccess: () => {},
    onFail: () => {},
    onFinish: () => {},
  },
);
```

<Source path="src-core/react/useRequest.ts" />
