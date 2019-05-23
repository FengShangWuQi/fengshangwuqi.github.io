import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`{
   ...padding(rhythm(3 / 4), 0)
}`}</pre>

      <EditLink path="src-core/style/padding.ts" />
    </div>
  );
};
