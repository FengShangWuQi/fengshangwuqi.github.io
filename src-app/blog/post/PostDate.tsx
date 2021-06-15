import React from "react";

import { useDesignSystem } from "src-core/ds";

export const PostDate = ({ date }: { date: string }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        marginTop: 5,
        color: ds.color.textLight,
        fontSize: 12,
      }}>
      <time>{date}</time>
    </div>
  );
};
