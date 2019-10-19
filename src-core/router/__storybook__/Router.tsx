import React from "react";

export default () => {
  return (
    <pre>{`const routes = {
  "/": {
    component: () => <Redirect to="core" />,
    routes: {
      ":group": {
        component: Layout,
      },
    },
  },
};

const routeResult = useRouter({ routes });
`}</pre>

    // <EditLink path="src-core/router/Router.tsx" />
  );
};
