import React from "react";

import { useDesignSystem } from "src-core/ds";
import { grid } from "src-core/style";

import { IconCornerDownLeft, IconGithubFill, IconSearch } from "../Icon";

export const IconDemo = () => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...grid({
          gridTemplateColumns: "repeat(6, 1fr)",
          gridColumnGap: ds.spacing[3],
          gridRowGap: ds.spacing[3],
        }),
        color: ds.color.secondary,
      }}>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconCornerDownLeft />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconCornerDownLeft
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconGithubFill />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconGithubFill
        </span>
      </div>
      <div
        css={{
          ...grid({}),
        }}>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size["4xl"],
          }}>
          <IconSearch />
        </span>
        <span
          css={{
            justifySelf: "center",
            fontSize: ds.size.sm,
          }}>
          IconSearch
        </span>
      </div>
    </div>
  );
};
