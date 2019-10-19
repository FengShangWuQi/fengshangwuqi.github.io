import React from "react";

import { useDesignSystem } from "src-core/ds";

import { Wrapper } from "../common/Wrapper";
import { Title } from "../common/Title";
import { ArchiveList, IArchiveList } from "./ArchiveList";

interface IArchive extends IArchiveList {
  totalCount: number;
}

export const Archive = ({ posts, totalCount }: IArchive) => {
  const ds = useDesignSystem();

  return (
    <Wrapper>
      <Title>
        <span>归档</span>
        <span
          css={{
            marginLeft: 8,
            fontSize: ds.size.xs,
          }}>{`${totalCount} 篇`}</span>
      </Title>

      <ArchiveList posts={posts} />
    </Wrapper>
  );
};
