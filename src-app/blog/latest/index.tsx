import React from "react";

import { Wrapper } from "../common/Wrapper";
import { Title } from "../common/Title";
import { LatestList, ILatestList } from "./LatestList";

interface ILatest extends ILatestList {}

export const Latest = ({ posts }: ILatest) => (
  <Wrapper>
    <Title>最近的文章</Title>
    <LatestList posts={posts} />
  </Wrapper>
);
