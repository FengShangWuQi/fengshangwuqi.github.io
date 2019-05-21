import React from "react";

export default () => {
  return (
    <pre>
      {`  isEmpty({})
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
  );
};
