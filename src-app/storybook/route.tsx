import React from "react";

import { Redirect } from "src-core/router";

import { Header } from "./common/Header";
import { Storybook } from "./common/Storybook";

export const routes = {
  "/": {
    component: () => <Redirect to="/components/tags/Tag" />,
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
