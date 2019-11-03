import React from "react";

import { useMatch } from "..";

export const MartchDemo = () => {
  const match = useMatch();

  return (
    <pre>{JSON.stringify(match, null, 2)}</pre>

    // <EditLink path="src-core/router/Match.tsx" />
  );
};
