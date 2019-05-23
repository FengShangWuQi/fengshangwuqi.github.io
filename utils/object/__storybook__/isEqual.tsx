import React from "react";

export default () => {
  return (
    <pre>
      {`isEqual({ a: 1 }, { a: 1 })
// => true

isEqual([1, 2], [1, 2])
// => true

{ a: 1 } === { a: 1 }
// => false

[1, 2] === [1, 2]
// => false
`}
    </pre>
  );
};
