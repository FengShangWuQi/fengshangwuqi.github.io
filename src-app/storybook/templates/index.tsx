import React from "react";

import { Bootstrap } from "src-core/react";
import { useRouter } from "src-core/router";

import { IDictionary } from "utils/object";

import { storybookTheme, StorybookGlobal } from "../common/Layout";
import { routes } from "../route";

export default () => {
  const routeResult = useRouter({ routes });

  return (
    <Bootstrap ds={storybookTheme}>
      <StorybookGlobal />

      {routeResult}
    </Bootstrap>
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
  cases: (require as any).context("cases", true, /\/__storybook__\/(.+)\.tsx$/),
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
