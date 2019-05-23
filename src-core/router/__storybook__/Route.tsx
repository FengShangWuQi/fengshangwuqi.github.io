import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`<Route path={path}>
  <Component />
</Route>
`}</pre>

      <EditLink path="src-core/router/Route.tsx" />
    </div>
  );
};
