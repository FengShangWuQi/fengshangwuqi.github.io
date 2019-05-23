import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`const App = () => {
  const ds = useDesignSystem();

  return <div css={{ background: ds.color.bg }} />
}
`}
      </pre>

      <EditLink path="src-core/ds/useDesignSystem.ts" />
    </div>
  );
};
