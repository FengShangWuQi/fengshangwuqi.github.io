import React from "react";
import { padding } from "polished";

import { LatestList, ILatestList } from "./LatestList";

interface ILatest extends ILatestList {}

export const Latest = ({ posts }: ILatest) => (
  <div
    css={{
      ...padding(0, 25, 58),
      boxShadow: "inset 0 0 30px #eee",
      overflow: "hidden",
    }}>
    <h2>最近的文章</h2>

    <LatestList posts={posts} />
  </div>
);
