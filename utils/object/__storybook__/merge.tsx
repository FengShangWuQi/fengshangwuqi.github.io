import React from "react";

export const MergeDemo = () => {
  return (
    <pre>
      {`const object = {
    a: [{ b: 2 }, { d: 4 }],
};

const other = {
    a: [{ c: 3 }, { e: 5 }],
};

merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
`}
    </pre>

    // <EditLink path="utils/object/merge.ts" />
  );
};
