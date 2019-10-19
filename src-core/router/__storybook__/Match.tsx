import React from "react";

import { useMatch } from "..";

export default () => {
  const match = useMatch();

  return (
    <pre>{JSON.stringify(match, null, 2)}</pre>

    // <EditLink path="src-core/router/Match.tsx" />
  );
};
