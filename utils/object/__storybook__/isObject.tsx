import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  isObject({})
  // => true

  isObject([1, 2, 3])
  // => true

  isObject(() => {})
  // => true

  isObject("123")
  // => false

  isObject(123)
  // => false

  isObject(null)
  // => false

  isObject(void 0)
  // => false
`}
      </pre>

      <EditLink path="utils/object/isObject.ts" />
    </div>
  );
};
