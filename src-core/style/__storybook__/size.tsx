import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`{
   ...size("100%", 400)
}`}</pre>

      <EditLink path="src-core/style/size.ts" />
    </div>
  );
};
