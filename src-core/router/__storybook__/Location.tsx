import React from "react";

export default () => {
  return (
    <pre>{`const { location, navigateTo } = useLocation();
const { pathname, search, hash } = location;
      
<a
  href="#!"
  onClick={() => navigateTo(href, { state })}>
  {children}
</a>
`}</pre>

    // <EditLink path="src-core/router/Location.tsx" />
  );
};
