import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  isEmpty({})
  // => true

  isEmpty(null)
  // => true

  isEmpty(true)
  // => true

  isEmpty(void 0)
  // => true

  isEmpty(1)
  // => true

  isEmpty([1, 2, 3])
  // => false
`}
      </pre>

      <EditLink path="utils/object/isEmpty.ts" />
    </div>
  );
};
