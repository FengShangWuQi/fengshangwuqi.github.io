import { SideBar } from "./common/SideBar";
import { Storybook } from "./common/Storybook";

export const routes = {
  "/": {
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
