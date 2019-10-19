import React from "react";

export default () => {
  return (
    <pre>
      {`const App = ({ ...otherprops }) =>
  <div {...pickElmAttrs(otherProps)} />
`}
    </pre>

    // <EditLink path="src-core/react/pickElmAttrs.ts" />
  );
};
