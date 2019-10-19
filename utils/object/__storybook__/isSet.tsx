import React from "react";

export default () => {
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
