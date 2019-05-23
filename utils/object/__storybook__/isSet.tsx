import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isSet(new Set())
// => true

isSet(new WeakSet())
// => false
`}
      </pre>

      <EditLink path="utils/object/isSet.ts" />
    </div>
  );
};
