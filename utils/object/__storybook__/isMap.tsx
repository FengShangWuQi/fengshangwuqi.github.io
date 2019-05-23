import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isMap(new Map())
// => true

isMap(new WeakMap())
// => false
`}
      </pre>

      <EditLink path="utils/object/isMap.ts" />
    </div>
  );
};
