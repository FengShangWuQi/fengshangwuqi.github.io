import React from "react";

import { Wrapper } from "../common/Wrapper";
import { Title } from "../common/Title";
import { LatestList, ILatestList } from "./LatestList";

export const Latest = ({ posts }: ILatestList) => (
  <Wrapper>
    <Title withBorder>最近的文章</Title>

    <LatestList posts={posts} />
  </Wrapper>
);
