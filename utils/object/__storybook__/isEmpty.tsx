import React from "react";

export const IsEmptyDemo = () => {
  return (
    <pre>
      {`isEmpty({})
// => true

isEmpty(null)
// => true

isEmpty(true)
// => true

isEmpty(void 0)
// => true

isEmpty(1)
// => true

isEmpty([1, 2, 3])
// => false
`}
    </pre>

    // <EditLink path="utils/object/isEmpty.ts" />
  );
};
