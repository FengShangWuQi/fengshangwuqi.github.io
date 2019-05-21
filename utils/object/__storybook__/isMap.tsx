import React from "react";

export default () => {
  return (
    <pre>
      {`  isMap(new Map())
  // => true

  isMap(new WeakMap())
  // => false
`}
    </pre>
  );
};
