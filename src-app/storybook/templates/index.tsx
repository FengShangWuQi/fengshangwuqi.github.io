import React from "react";

import { Router, Route, IBaseRoute } from "src-core/router";

import { flex, position, size, margin } from "src-core/style";

import { IDictionary } from "utils/object";

import { Layout } from "../common/Layout";
import { SideBar } from "../common/SideBar";
import { Header } from "../common/Header";

export default () => {
  const groupModuleCompList: IDictionary<
    IDictionary<IDictionary<React.FunctionComponent>>
  > = Object.keys(groups).reduce((prevGroups, groupName) => {
    const currGroup = groups[groupName as keyof typeof groups].keys();

    const modules = currGroup.reduce(
      (prevModules: IDictionary<any>, compPath: string) => {
        const [moduleName, compName] = compPath
          .replace(/^.{2}|\/__storybook__|\.tsx?$/g, "")
          .split("/");
        const comp = groups[groupName as keyof typeof groups](compPath).default;

        if (!!prevModules[moduleName]) {
          return {
            ...prevModules,
            [moduleName]: { ...prevModules[moduleName], [compName]: comp },
          };
        }
        return { ...prevModules, [moduleName]: { [compName]: comp } };
      },
      {},
    );

    return { ...prevGroups, [groupName]: modules };
  }, {});

  const currGroup = "components";
  const currModules: IDictionary<string[]> = Object.keys(
    groupModuleCompList[currGroup],
  ).reduce(
    (prevModules, currModule) => ({
      ...prevModules,
      [currModule]: Object.keys(groupModuleCompList[currGroup][currModule]),
    }),
    {},
  );

  return (
    <Layout>
      <Header />

      <Container>
        <SideBar modules={currModules} />

        <Router pathPrefix={currGroup}>
          {Object.keys(currModules).map(currModule =>
            currModules[currModule as keyof typeof currModules].map(
              currComp => (
                <Route
                  component={
                    groupModuleCompList[currGroup][currModule][currComp]
                  }
                  path={`${currModule}/${currComp}`}
                />
              ),
            ),
          )}
        </Router>
      </Container>
    </Layout>
  );
};

const groups = {
  core: (require as any).context(
    "src-core",
    true,
    /\/__storybook__\/(.+)\.tsx$/,
  ),
  components: (require as any).context(
    "src-components",
    true,
    /\/__storybook__\/(.+)\.tsx$/,
  ),
  utils: (require as any).context("utils", true, /\/__storybook__\/(.+)\.tsx$/),
};

const Container = ({
  children,
}: { children: React.ReactNode } & IBaseRoute) => {
  return (
    <div
      css={[
        {
          ...flex({}),
          ...position("relative"),
          ...margin(0, "auto"),
          ...size("100%"),
          marginTop: 40,
          maxWidth: 1200,
        },
      ]}>
      {children}
    </div>
  );
};
