import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isFunction(() => {})
// => true
`}
      </pre>

      <EditLink path="utils/object/isFunction.ts" />
    </div>
  );
};
