import React from "react";

import { useDesignSystem } from "src-core/ds";
import { rhythm } from "src-core/style";

export const Content = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        marginBottom: rhythm(5),
        "&:last-of-type": {
          marginBottom: 0,
        },
      }}>
      <h1
        css={{
          color: ds.color.textLight,
        }}>
        {title}
      </h1>
      {children}
    </div>
  );
};
