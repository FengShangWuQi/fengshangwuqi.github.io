import React from "react";

export default () => {
  return (
    <pre>
      {`  startsWith("/path", "/")
  // => true

  startsWith("/path", "path")
  // => false
`}
    </pre>
  );
};
