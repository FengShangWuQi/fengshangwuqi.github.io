import React from "react";

import { useDesignSystem } from "src-core/ds";

import { LatestList, ILatestList } from "./LatestList";

interface ILatest extends ILatestList {}

export const Latest = ({ posts }: ILatest) => {
  const ds = useDesignSystem();

  return (
    <div>
      <h1
        css={{
          color: ds.color.text,
        }}>
        最新的文章
      </h1>

      <LatestList posts={posts} />
    </div>
  );
};
