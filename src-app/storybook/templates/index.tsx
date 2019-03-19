import React from "react";

import { flex, position, size, margin } from "src-core/style";

import { IDictionary } from "utils/object";

import { Layout } from "../common/Layout";
import { Nav } from "../common/Nav";
import { Storybook } from "../common/Storybook";
import { Header } from "../common/Header";

export default () => {
  const groupModuleList: IDictionary<
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

  const currGroup = groupModuleList.components;
  const modules = Object.keys(currGroup).reduce(
    (prevModules, moduleName) => ({
      ...prevModules,
      [moduleName]: Object.keys(currGroup[moduleName]),
    }),
    {},
  );
  const Comp = groupModuleList.components["menus"]["BaseMenu"];

  return (
    <Layout>
      <Header />

      <Container>
        <Nav modules={modules} />
        <Storybook Comp={Comp} />
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

const Container = ({ children }: { children: React.ReactNode }) => {
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
