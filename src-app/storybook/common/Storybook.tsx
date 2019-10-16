import React from "react";

import { useDesignSystem } from "src-core/ds";
import { useMatch } from "src-core/router";

import { rhythm } from "src-core/style";

import { groupModuleCompList } from "../templates";

export const Storybook = () => {
  const {
    params: { group, module, component },
  } = useMatch();

  const ds = useDesignSystem();

  const SB = groupModuleCompList[group][module][component];

  return (
    SB && (
      <div
        css={{
          height: "calc(100vh - 130px)",
          overflow: "scroll",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}>
        <h1
          css={{
            color: ds.color.textLight,
          }}>
          {component}
        </h1>
        <SB />
      </div>
    )
  );
};

export const EditLink = ({ path }: { path: string }) => {
  return (
    <div
      css={{
        marginTop: rhythm(3),
      }}>
      <a
        href={`https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev/${path}`}
        target="_blank"
        rel="noopener noreferrer">
        Edit on GitHub
      </a>
    </div>
  );
};
