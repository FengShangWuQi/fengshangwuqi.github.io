import React from "react";
import { margin, padding, border } from "polished";

import { useDesignSystem } from "src-core/ds";

import { LatestList, ILatestList } from "./LatestList";

interface ILatest extends ILatestList {}

export const Latest = ({ posts }: ILatest) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...padding(25, 25, 58),
        boxShadow: "inset 0 0 30px #eee",
        overflow: "hidden",
      }}>
      <p
        css={{
          ...margin(12, 0, 26),
          ...border("bottom", 3, "solid", ds.color.primary),
          fontSize: ds.size.l,
          color: ds.color.text,
        }}>
        最近的文章
      </p>

      <LatestList posts={posts} />
    </div>
  );
};
