import React from "react";

import { Redirect } from "src-core/router";

import { SideBar } from "./common/SideBar";
import { Storybook } from "./common/Storybook";

export const routes = {
  "/": {
    component: () => <Redirect to="components" />,
    routes: {
      ":group": {
        component: SideBar,
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
