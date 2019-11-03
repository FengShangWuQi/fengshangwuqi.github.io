import React from "react";

export const isArrayDemo = () => {
  return (
    <pre>
      {`isArray([1, 2, 3]);
// => true

isArray(new Set([1, 2, 3]))
// => false

isArray(new Map([[1, "a"], [2, "b"], [3, "c"]]))
// => false

isArray({ 1: "a", 2: "b", 3: "c", length: 3 })
// => false
`}
    </pre>

    // <EditLink path="utils/array/isArray.ts" />
  );
};
