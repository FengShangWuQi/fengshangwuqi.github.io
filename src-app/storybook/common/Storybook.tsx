import React from "react";

import { useMatch } from "src-core/router";

import { flex, margin, rhythm, padding } from "src-core/style";

import { groupModuleCompList } from "../templates";
import { SideBar } from "./SideBar";

export const Storybook = () => {
  const {
    params: { group, module, component },
  } = useMatch();

  const SB = groupModuleCompList[group][module][component];

  return (
    SB && (
      <div
        css={{
          ...flex({}),
          ...margin(40, "auto"),
          ...padding(0, 24),
          maxWidth: 1200,
        }}>
        <SideBar group={group} />
        <div
          css={{
            flexGrow: 1,
          }}>
          <h1>{component}</h1>

          <SB />

          <div
            css={{
              marginTop: rhythm(3),
            }}>
            <a
              href={`https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev/${getGroupPath(
                group,
              )}/${module}/${
                group === "cases" ? "__storybook__/" : ""
              }${component}.${getSuffix(group)}`}
              target="_blank"
              rel="noopener noreferrer">
              Edit this component
            </a>
          </div>
        </div>
      </div>
    )
  );
};

const getGroupPath = (group: string) => {
  if (group === "core" || group === "components") {
    return `src-${group}`;
  }

  return group;
};

export const getSuffix = (group: string) => {
  if (group === "utils") {
    return "ts";
  }

  return "tsx";
};
