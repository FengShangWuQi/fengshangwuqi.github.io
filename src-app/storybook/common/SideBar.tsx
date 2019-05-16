import React from "react";

import { useDesignSystem } from "src-core/ds";
import { Link } from "src-core/router";

import { border } from "src-core/style";

import { BaseMenu, BaseMenuItem, MenuMode } from "src-components/menus";

import { groupModuleCompList } from "../templates";

export const SideBar = ({ group }: { group: string }) => {
  const ds = useDesignSystem();

  const currGroup = groupModuleCompList[group];

  return (
    <div
      css={{
        ...border("right", 1, "solid", ds.color.primary),
        marginRight: 40,
        width: 220,
        height: "100%",
        fontSize: ds.size.s,
      }}>
      {Object.keys(currGroup).map(moduleName => (
        <div key={moduleName}>
          <div
            css={{
              lineHeight: "32px",
              color: "#1B1D1D",
              fontSize: ds.size.m,
              fontWeight: "bold",
            }}>
            {moduleName}
          </div>
          <BaseMenu mode={MenuMode.VERTICAL}>
            {Object.keys(currGroup[moduleName]).map(compName => (
              <Link
                css={{
                  color: ds.color.text,
                }}
                key={compName}
                to={`/${group}/${moduleName}/${compName}`}>
                <BaseMenuItem> {compName}</BaseMenuItem>
              </Link>
            ))}
          </BaseMenu>
        </div>
      ))}
    </div>
  );
};
