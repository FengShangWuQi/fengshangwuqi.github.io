import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`<Global styles={{ ...normalize() }} />`}</pre>

      <EditLink path="src-core/style/normalize.ts" />
    </div>
  );
};
