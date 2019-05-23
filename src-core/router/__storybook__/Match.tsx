import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { useMatch } from "..";

export default () => {
  const match = useMatch();

  return (
    <div>
      <pre>{JSON.stringify(match, null, 2)}</pre>

      <EditLink path="src-core/router/Match.tsx" />
    </div>
  );
};
