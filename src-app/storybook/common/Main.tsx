import React from "react";

import { useRouter, useRedirect, useMatch } from "src-core/router";

import { padding, margin, grid } from "src-core/style";

import { isEmpty } from "utils/object";

import { Storybook } from "./Storybook";
import { SideBar } from "./SideBar";
import { groupModuleCompList } from "../templates";

export const Main = () => {
  const {
    params: { group },
  } = useMatch();
  const mainResult = useRouter({ routes: MainRoute, pathPrefix: ":group" });

  groupRedirect();

  return (
    <Container>
      <SideBar group={group} />
      {mainResult}
    </Container>
  );
};

const MainRoute = {
  ":module": {
    routes: {
      ":component": {
        component: Storybook,
      },
    },
  },
};

const groupRedirect = () => {
  const groups = Object.keys(groupModuleCompList);
  groups.map(groupName => {
    const group = groupModuleCompList[groupName];

    if (!isEmpty(group)) {
      const moduleName = Object.keys(group)[0];
      const componentName = Object.keys(group[moduleName])[0];

      useRedirect(
        `/${groupName}`,
        `/${groupName}/${moduleName}/${componentName}`,
      );
    }
  });
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      css={{
        ...grid({
          gridTemplateColumns: "220px auto",
          gridColumnGap: 40,
        }),
        ...margin(40, "auto"),
        ...padding(0, 24),
        maxWidth: 1200,
        minWidth: 900,
      }}>
      {children}
    </div>
  );
};
