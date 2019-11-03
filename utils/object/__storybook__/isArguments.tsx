import React from "react";

export const IsArgumentsDemo = () => {
  return (
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

    // <EditLink path="utils/object/isArguments.ts" />
  );
};
