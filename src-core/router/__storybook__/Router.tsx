import React from "react";

import { EditLink } from "src-app/storybook/common/Storybook";

export default () => {
  return (
    <div>
      <pre>{`const routes = {
  "/": {
    component: () => <Redirect to="core" />,
    routes: {
      ":group": {
        component: Header,
        routes: {
          ":module": {
            routes: {
              ":component": {
                component: Storybook,
              },
            },
          },
        },
      },
    },
  },
};

const routeResult = useRouter({ routes });
`}</pre>

      <EditLink path="src-core/router/Router.tsx" />
    </div>
  );
};
