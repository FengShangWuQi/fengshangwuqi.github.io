import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`isArrayLike([1, 2, 3]);
// => true

isArrayLike(new Set([1, 2, 3]))
// => false

isArrayLike(new Map([[1, "a"], [2, "b"], [3, "c"]]))
// => false

isArrayLike({ 1: "a", 2: "b", 3: "c", length: 3 })
// => true
`}
      </pre>

      <EditLink path="utils/array/isArrayLike.ts" />
    </div>
  );
};
