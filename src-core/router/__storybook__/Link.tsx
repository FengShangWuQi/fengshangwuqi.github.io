import React from "react";

import { Link } from "..";

export const LinkDemo = () => {
  return (
    <div>
      <pre>{`<Link to="../Match" />
      
<Link to="/core/router/Match" />
`}</pre>

      <div
        css={{
          marginTop: 24,
        }}>
        <Link to="../Match">Link to Match</Link>
      </div>

      {/* <EditLink path="src-core/router/Link.tsx" /> */}
    </div>
  );
};
