import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`const App = ({ ...otherprops }) =>
  <div {...pickElmAttrs(otherProps)} />
`}
      </pre>

      <EditLink path="src-core/react/pickElmAttrs.ts" />
    </div>
  );
};
