import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isUndefined(void 0)
// => true

isUndefined(null)
// => false
`}
      </pre>

      <EditLink path="utils/object/isUndefined.ts" />
    </div>
  );
};
