import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`{
   ...position("absolute", 0, 0, 0, 0)
}`}</pre>

      <EditLink path="src-core/style/position.ts" />
    </div>
  );
};
