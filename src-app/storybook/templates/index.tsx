import React from "react";
import Helmet from "react-helmet";
import { graphql, useStaticQuery } from "gatsby";

import { Bootstrap } from "src-core/react";
import { useRouter, Redirect } from "src-core/router";

import { IDictionary } from "utils/object";

import { storybookTheme, Layout } from "../common/Layout";

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );
  return site.siteMetadata;
};

export default () => {
  const { title } = useSiteMetadata();

  const rootResult = useRouter({ routes: rootRoutes });

  return (
    <Bootstrap ds={storybookTheme}>
      {/** TODO:
           The dependency react-side-effect uses legacy componentWillMount lifecycle method
           https://github.com/nfl/react-helmet/issues/413
      */}
      <Helmet
        title={title}
        meta={[
          {
            name: "viewport",
            content: "user-scalable=no",
          },
        ]}
      />

      {rootResult}
    </Bootstrap>
  );
};

const rootRoutes = {
  "/": {
    component: () => <Redirect to="core" />,
    routes: {
      ":group": {
        component: Layout,
      },
    },
  },
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
