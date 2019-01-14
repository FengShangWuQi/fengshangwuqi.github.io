import React from "react";

import { ArchiveList, IArchiveList } from "./ArchiveList";

interface IArchive extends IArchiveList {
  totalCount: number;
}

export const Archive = ({ posts }: IArchive) => (
  <div>
    <ArchiveList posts={posts} />
  </div>
);
