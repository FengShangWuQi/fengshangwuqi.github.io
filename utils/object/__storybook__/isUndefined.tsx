import React from "react";

export const IsUndefinedDemo = () => {
  return (
    <pre>
      {`isUndefined(void 0)
// => true

isUndefined(null)
// => false
`}
    </pre>

    // <EditLink path="utils/object/isUndefined.ts" />
  );
};
