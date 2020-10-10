import React from "react";

import { useToggle } from "src-core/hooks";
import { withoutBubble } from "utils";

import { Redirect } from "..";

export const RedirectDemo = () => {
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
