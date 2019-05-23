import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`<ThemeProvider theme={defaultTheme}>
  <DSReset />
  {children}
</ThemeProvider>
`}
      </pre>

      <EditLink path="src-core/ds/reset.tsx" />
    </div>
  );
};
