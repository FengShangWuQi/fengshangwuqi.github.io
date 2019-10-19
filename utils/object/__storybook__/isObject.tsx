import React from "react";

export default () => {
  return (
    <pre>
      {`isObject({})
// => true

isObject([1, 2, 3])
// => true

isObject(() => {})
// => true

isObject("123")
// => false

isObject(123)
// => false

isObject(null)
// => false

isObject(void 0)
  // => false
`}
    </pre>

    // <EditLink path="utils/object/isObject.ts" />
  );
};
