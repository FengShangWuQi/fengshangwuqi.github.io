import React from "react";

import { padding } from "src-core/style";

import { LatestList, ILatestList } from "./LatestList";

interface ILatest extends ILatestList {}

export const Latest = ({ posts }: ILatest) => (
  <div
    css={{
      ...padding(0, 25, 58),
      boxShadow: "inset 0 0 30px #eee",
      overflow: "hidden",
    }}>
    <h1>最近的文章</h1>

    <LatestList posts={posts} />
  </div>
);
