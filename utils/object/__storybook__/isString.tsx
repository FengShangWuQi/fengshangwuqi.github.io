import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isString("abc")
// => true

isString(123)
// => false
`}
      </pre>

      <EditLink path="utils/object/isString.ts" />
    </div>
  );
};
