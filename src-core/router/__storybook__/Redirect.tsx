import React, { useState } from "react";

import { withoutBubble } from "src-core/react";

import { EditLink } from "src-app/storybook/common/Storybook";

import { Redirect } from "..";

export default () => {
  const [toggle, setToggle] = useState(false);

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
            setToggle(true);
          })}>
          Redirect to Match
        </a>
      </div>

      {toggle && <Redirect to="../Match" />}

      <EditLink path="src-core/router/Redirect.tsx" />
    </div>
  );
};
