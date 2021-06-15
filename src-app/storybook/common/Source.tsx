import React from "react";

import { useDesignSystem } from "src-core/ds";
import { inlineFlex } from "src-core/style";

import { IconGithub } from "src-components/basic/Icon";

export const Source = ({ path }: { path: string }) => {
  const ds = useDesignSystem();

  const PATH_PREFIX =
    "https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev";
  const link = path.startsWith("http") ? path : `${PATH_PREFIX}/${path}`;

  return (
    <a
      css={{
        ...inlineFlex({
          alignItems: "center",
        }),
        marginTop: ds.spacing[5],
        fontSize: ds.size.xs,
      }}
      title={link}
      href={link}
      target="_blank"
      rel="noopener noreferrer">
      <IconGithub
        css={{
          marginRight: ds.spacing[2],
          fill: ds.color.primary,
        }}
      />
      <span>Source</span>
    </a>
  );
};
