import React from "react";

import { useDesignSystem } from "src-core/ds";
import { inlineFlex, rhythm } from "src-core/style";

import { IconGithubFill } from "src-components/basic/Icon";

export const Source = ({ path }: { path: string }) => {
  const ds = useDesignSystem();

  return (
    <a
      css={{
        ...inlineFlex({
          alignItems: "center",
        }),
        marginTop: rhythm(2),
        fontSize: ds.size.xs,
      }}
      href={`https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev/${path}`}
      target="_blank"
      rel="noopener noreferrer">
      <IconGithubFill
        css={{
          marginRight: ds.padding.s,
          fill: ds.color.primary,
        }}
      />
      <span>Source</span>
    </a>
  );
};
