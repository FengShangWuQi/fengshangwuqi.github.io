import React from "react";

import { useDesignSystem } from "src-core/ds";
import { inlineFlex } from "src-core/style";

import { IconGithubFill } from "src-components/basic/Icon";

export const Source = ({ path }: { path: string }) => {
  const ds = useDesignSystem();

  return (
    <a
      css={{
        ...inlineFlex({
          alignItems: "center",
        }),
        marginTop: ds.spacing[5],
        fontSize: ds.size.xs,
      }}
      href={`https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev/${path}`}
      target="_blank"
      rel="noopener noreferrer">
      <IconGithubFill
        css={{
          marginRight: ds.spacing[2],
          fill: ds.color.primary,
        }}
      />
      <span>Source</span>
    </a>
  );
};
