import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`{
   ...margin(0, "auto")
}`}</pre>

      <EditLink path="src-core/style/margin.ts" />
    </div>
  );
};
