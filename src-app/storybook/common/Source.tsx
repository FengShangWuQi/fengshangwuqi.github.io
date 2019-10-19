import React from "react";

import { useDesignSystem } from "src-core/ds";
import { rhythm } from "src-core/style";

export const Source = ({ path }: { path: string }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        marginTop: rhythm(2),
        fontSize: ds.size.xs,
      }}>
      <a
        href={`https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev/${path}`}
        target="_blank"
        rel="noopener noreferrer">
        Source
      </a>
    </div>
  );
};
