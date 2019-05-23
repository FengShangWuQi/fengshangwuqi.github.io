import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  isArray([1, 2, 3]);
  // => true

  isArray(new Set([1, 2, 3]))
  // => false

  isArray(new Map([[1, "a"], [2, "b"], [3, "c"]]))
  // => false

  isArray({ 1: "a", 2: "b", 3: "c", length: 3 })
  // => false
`}
      </pre>

      <EditLink path="utils/array/isArray.ts" />
    </div>
  );
};
