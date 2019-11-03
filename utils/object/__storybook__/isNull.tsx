import React from "react";

export const IsNullDemo = () => {
  return (
    <pre>
      {`isNull(null)
// => true

isNull(void 0)
// => false
`}
    </pre>

    // <EditLink path="utils/object/isNull.ts" />
  );
};
