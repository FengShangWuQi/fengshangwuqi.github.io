import React from "react";

export const IsSetDemo = () => {
  return (
    <pre>
      {`isSet(new Set())
// => true

isSet(new WeakSet())
// => false
`}
    </pre>

    // <EditLink path="utils/object/isSet.ts" />
  );
};
