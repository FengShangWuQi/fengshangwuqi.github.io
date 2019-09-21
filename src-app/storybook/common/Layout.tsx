import React from "react";
import { Global } from "@emotion/core";
import { isEmpty } from "utils/object";

import { useRouter, useRedirect, useMatch } from "src-core/router";
import { defaultTheme, useDesignSystem } from "src-core/ds";
import { padding, rhythm, margin, border, grid } from "src-core/style";

import { Header } from "../common/Header";
import { Storybook } from "../common/Storybook";
import { groupModuleCompList } from "../templates";
import { SideBar } from "./SideBar";

export const storybookTheme = {
  ...defaultTheme,
  color: {
    ...defaultTheme.color,
    primary: "#c2185b",
    text: "#1B1D1D",
  },
};

export const Layout = () => {
  const {
    params: { group },
  } = useMatch();

  const mainResult = useRouter({ routes: MainRoute, pathPrefix: ":group" });

  groupRedirect();

  return (
    <div>
      <StorybookGlobal />
      <Header />

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
        <SideBar group={group} />
        {mainResult}
      </div>
    </div>
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

const StorybookGlobal = () => {
  const ds = useDesignSystem();

  return (
    <Global
      styles={{
        "html, body": {
          width: "100%",
          height: "100%",
          background: "#fafafa",
          overflow: "hidden",
        },

        h1: {
          marginBottom: rhythm(1),
        },

        h3: {
          ...margin(rhythm(3 / 2), 0, rhythm(1)),
          ...border("bottom", 1, "solid", ds.color.primary),
          paddingBottom: rhythm(1 / 2),
        },

        button: {
          cursor: "pointer",
        },

        pre: {
          ...border("left", 2, "solid", "#ddd"),
          marginBottom: 0,
          paddingLeft: 18,
        },
      }}
    />
  );
};
