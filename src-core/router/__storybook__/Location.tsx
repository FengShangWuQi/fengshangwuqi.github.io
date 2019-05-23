import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`const { location, navigateTo } = useLocation();
const { pathname, search, hash } = location;
      
<a
  href="#!"
  onClick={() => navigateTo(href, { state })}>
  {children}
</a>
`}</pre>

      <EditLink path="src-core/router/Location.tsx" />
    </div>
  );
};
