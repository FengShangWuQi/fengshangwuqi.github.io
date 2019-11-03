import React from "react";

export const IsStringDemo = () => {
  return (
    <pre>
      {`isString("abc")
// => true

isString(123)
// => false
`}
    </pre>

    // <EditLink path="utils/object/isString.ts" />
  );
};
