import React from "react";

import { useDesignSystem } from "src-core/ds";

import { ArchiveList, IArchiveList } from "./ArchiveList";

interface IArchive extends IArchiveList {
  totalCount: number;
}

export const Archive = ({ posts }: IArchive) => {
  const ds = useDesignSystem();

  return (
    <div>
      <h1
        css={{
          color: ds.color.text,
        }}>
        归档
      </h1>

      <ArchiveList posts={posts} />
    </div>
  );
};
