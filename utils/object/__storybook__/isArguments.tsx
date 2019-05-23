import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isArguments(
  (function() {
    return arguments;
  })(),
)
// => true

isArguments([1, 2, 3])
// => false
`}
      </pre>

      <EditLink path="utils/object/isArguments.ts" />
    </div>
  );
};
