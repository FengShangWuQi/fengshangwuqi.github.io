import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>
        {`  <Discussion
   shortname={shortname}
   config={{
     identifier,
     url,
   }}
  />
`}
      </pre>

      <EditLink path="src-core/disqus/Discussion.tsx" />
    </div>
  );
};
