import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`{
  ...border("bottom", 1, "solid", "#eee")
}`}</pre>

      <EditLink path="src-core/style/border.ts" />
    </div>
  );
};
