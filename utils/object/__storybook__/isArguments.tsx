import React from "react";

export default () => {
  return (
    <pre>
      {`  isArguments(
    (function() {
      return arguments;
    })(),
  )
  // => true

  isArguments([1, 2, 3])
  // => false
`}
    </pre>
  );
};
