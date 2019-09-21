import React from "react";

import { useMatch } from "src-core/router";

import { rhythm } from "src-core/style";

import { groupModuleCompList } from "../templates";

export const Storybook = () => {
  const {
    params: { group, module, component },
  } = useMatch();

  const SB = groupModuleCompList[group][module][component];

  return (
    SB && (
      <div>
        <h1>{component}</h1>
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
