import React from "react";

import { Link, useRouter } from "src-core/router";

import { flex, position, size, margin } from "src-core/style";

import { BaseMenu, BaseMenuItem } from "src-components/menus";

import { IDictionary } from "utils/object";

import { routes } from "../route";
import { Layout } from "../common/Layout";
import { Header } from "../common/Header";

export default () => {
  const routeResult = useRouter({ routes, pathPrefix: "/" });

  return (
    <Layout>
      <Header>
        <div
          css={{
            ...flex({
              justifyContent: "space-between",
            }),
          }}>
          <Link to="/">枫上雾棋的 storybook</Link>
          <BaseMenu
            css={{
              height: 50,
              lineHeight: "50px",
            }}>
            {Object.keys(groupModuleCompList).map(groupName => (
              <Link to={groupName} key={groupName}>
                <BaseMenuItem>{groupName.toUpperCase()}</BaseMenuItem>
              </Link>
            ))}
          </BaseMenu>
        </div>
      </Header>

      <Container>{routeResult}</Container>
    </Layout>
  );
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

export const groupModuleCompList: IDictionary<
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
