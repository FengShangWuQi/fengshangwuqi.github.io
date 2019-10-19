import React from "react";

export default () => {
  return (
    <pre>
      {`const obj = { a: [{ b: { c: 3 } }] };
            
get(object, ["a"])
// => [ { b: { c: 3 } } ]

get(object, ["a", "0"])
// => { b: { c: 3 } }

get(object, ["a", "0", "b"])
// => { c: 3 }

get(object, ["a", "0", "b", "c"])
// => 3

get(object, ["a", "0", "b", "c", "d"])
// => undefined

get(object, ["a", "0", "b", "c", "d"], 4)
// => 4
`}
    </pre>

    // <EditLink path="utils/object/get.ts" />
  );
};
