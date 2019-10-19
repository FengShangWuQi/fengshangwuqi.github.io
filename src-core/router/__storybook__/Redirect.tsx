import React from "react";

import { withoutBubble, useToggle } from "src-core/react";

import { Redirect } from "..";

export default () => {
  const [on, toggle] = useToggle(false);

  return (
    <div>
      <pre>{`<Redirect to="../Match" />
      
<Redirect to="/core/router/Match" />

useRedirect("/core/router/Redirect", "/core/router/Match")
`}</pre>

      <div
        css={{
          marginTop: 24,
        }}>
        <a
          href="#!"
          onClick={withoutBubble(() => {
            toggle();
          })}>
          Redirect to Match
        </a>
      </div>

      {on && <Redirect to="../Match" />}

      {/* <EditLink path="src-core/router/Redirect.tsx" /> */}
    </div>
  );
};
