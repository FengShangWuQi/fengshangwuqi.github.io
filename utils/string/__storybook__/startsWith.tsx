import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`startsWith("/path", "/")
// => true

startsWith("/path", "path")
// => false
`}
      </pre>

      <EditLink path="utils/string/startsWith.ts" />
    </div>
  );
};
