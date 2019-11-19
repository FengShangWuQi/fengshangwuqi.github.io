import React from "react";

import { useDesignSystem } from "src-core/ds";

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
        marginBottom: "7rem",
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
