import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  titleCase("top")
  // => Top
`}
      </pre>

      <EditLink path="utils/string/titleCase.ts" />
    </div>
  );
};
