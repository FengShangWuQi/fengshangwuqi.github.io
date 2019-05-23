import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  format(new Date(), "YY-MM-DD hh:mm:ss");
  // => 10-10-10 10:10:10
`}
      </pre>

      <EditLink path="utils/date/format.ts" />
    </div>
  );
};
