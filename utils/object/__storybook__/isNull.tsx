import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  isNull(null)
  // => true

  isNull(void 0)
  // => false
`}
      </pre>

      <EditLink path="utils/object/isNull.ts" />
    </div>
  );
};
