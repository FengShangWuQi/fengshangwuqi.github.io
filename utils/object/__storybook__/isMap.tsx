import React from "react";

export const IsMapDemo = () => {
  return (
    <pre>
      {`isMap(new Map())
// => true

isMap(new WeakMap())
// => false
`}
    </pre>

    // <EditLink path="utils/object/isMap.ts" />
  );
};
