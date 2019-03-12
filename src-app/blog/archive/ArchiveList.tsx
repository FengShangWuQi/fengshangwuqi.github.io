import React from "react";
import { Link } from "gatsby";
import { rgba } from "polished";

import { useHover } from "src-core/react";
import { flex, position, padding } from "src-core/style";
import { useDesignSystem } from "src-core/ds";

import { rhythm } from "../common/typography";
import { PostTag } from "../post/PostTag";

export interface IArchiveList {
  posts: IArchiveNode[];
}

interface IArchiveItem {
  title: string;
  tags: string[];
  path: string;
  date: string;
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
        fontSize: ds.size.s,

        "&:before": {
          ...position("absolute"),
          left: 90,
          top: 0,
          content: `""`,
          width: 2,
          height: "100%",
          background: rgba(ds.color.primary, 0.3),
        },
      }}>
      {posts.map(({ node }: IArchiveNode) => (
        <ArchiveItem
          key={node.fields.slug}
          title={node.frontmatter.title}
          tags={node.frontmatter.tags}
          path={node.fields.slug}
          date={node.frontmatter.date}
        />
      ))}
    </div>
  );
};

const ArchiveItem = ({ path, title, tags, date }: IArchiveItem) => {
  const ds = useDesignSystem();

  const [hoverRef, isHovered] = useHover();

  return (
    <div
      css={{
        ...flex({
          alignItems: "center",
        }),
        ...position("relative"),
        ...padding(rhythm(3 / 4), 0),
      }}>
      <time
        css={{
          width: 90,
          color: rgba(ds.color.textLight, 0.3),
        }}>
        {date}
      </time>

      <div
        style={{
          marginLeft: -3,
          width: 8,
          height: 8,
          borderRadius: ds.radius.m,
          border: `1px solid ${ds.color.primary}`,
          background: isHovered ? ds.color.primary : ds.color.bg,
        }}
      />

      <div
        ref={hoverRef}
        css={{
          marginLeft: rhythm(7 / 8),
        }}>
        <Link
          css={{
            marginRight: rhythm(1 / 3),
            color: ds.color.textLight,
          }}
          to={path}>
          {title}
        </Link>
        {tags.map((tag: string) => (
          <PostTag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};
