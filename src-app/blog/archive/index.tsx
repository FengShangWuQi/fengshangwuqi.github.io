import React from "react";
import { margin, padding } from "polished";

import { useDesignSystem } from "src-core/ds";
import { border } from "src-core/style";

import { ArchiveList, IArchiveList } from "./ArchiveList";

interface IArchive extends IArchiveList {
  totalCount: number;
}

export const Archive = ({ posts, totalCount }: IArchive) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...padding(28, 68, 58),
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
        <span>归档</span>
        <span
          css={{
            marginLeft: 8,
            fontSize: ds.size.xxs,
          }}>{`${totalCount} 篇`}</span>
      </p>

      <ArchiveList posts={posts} />
    </div>
  );
};
