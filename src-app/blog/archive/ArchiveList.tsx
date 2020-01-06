import React from "react";
import { Link } from "gatsby";
import { rgba, padding, position, border } from "polished";

import { useHover } from "src-core/hooks";
import { flex } from "src-core/style";
import { useDesignSystem } from "src-core/ds";

export interface IArchiveList {
  posts: IArchiveNode[];
}

interface IArchiveItem {
  title: string;
  path: string;
}

interface IArchiveNode {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      tags: string[];
      title: string;
      date: string;
    };
  };
}

export const ArchiveList = ({ posts }: IArchiveList) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...position("relative"),
        fontSize: ds.size.sm,

        "&:before": {
          ...position("absolute"),
          left: 0,
          top: 0,
          content: `""`,
          width: 2,
          height: "100%",
          background: rgba(ds.color.primary, 0.3),
        },
      }}>
      {posts.map(({ node }: IArchiveNode) => {
        return (
          <ArchiveItem
            key={node.fields.slug}
            title={node.frontmatter.title}
            path={node.fields.slug}
          />
        );
      })}
    </div>
  );
};

const ArchiveItem = ({ path, title }: IArchiveItem) => {
  const ds = useDesignSystem();

  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <div
        css={{
          ...flex({
            alignItems: "center",
          }),
          ...position("relative"),
          ...padding(ds.spacing[2], 0),
        }}>
        <div
          style={{
            ...border(1, "solid", ds.color.primary),
            marginLeft: -3,
            width: 8,
            height: 8,
            borderRadius: ds.radius.default,
            background: isHovered ? ds.color.primary : ds.colorPalette.white,
          }}
        />

        <div
          css={{
            marginLeft: ds.spacing[4],
          }}>
          <Link
            css={{
              marginRight: ds.spacing[3],
              color: ds.color.textLight,
            }}
            to={path}>
            <span ref={hoverRef}>{title}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
