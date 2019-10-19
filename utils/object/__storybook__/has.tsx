import React from "react";

export default () => {
  return (
    <pre>
      {`const obj = { a: [{ b: { c: 3 } }] };
            
has(object, "a")
// => true

has(object, ["a"])
// => true

has(object, ["a", "0"])
// => true

has(object, ["a", "0", "b"])
// => true

has(object, ["a", "0", "b", "d"])
// => false
`}
    </pre>

    // <EditLink path="utils/object/has.ts" />
  );
};
