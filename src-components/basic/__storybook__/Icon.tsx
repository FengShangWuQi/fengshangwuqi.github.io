import React from "react";

import { useDesignSystem } from "src-core/ds";
import { grid } from "src-core/style";

import { IconGithubFill } from "../Icon";

export const IconDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...grid({
          gridTemplateColumns: "repeat(6, 1fr)",
          gridColumnGap: ds.padding.l,
          gridRowGap: ds.padding.l,
        }),
        color: ds.color.textLight,
        fill: ds.color.textLight,
      }}>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.xxl,
          }}>
          <IconGithubFill />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.s,
          }}>
          IconGithubFill
        </span>
      </div>
    </div>
  );
};
