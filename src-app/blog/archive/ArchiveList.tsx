import React, { useRef } from "react";
import { Link } from "gatsby";
import { rgba, ellipsis } from "polished";

import { useHover, useRect } from "src-core/react";
import { rhythm, flex, position, padding } from "src-core/style";
import { useDesignSystem } from "src-core/ds";

import { PostTag } from "../post/PostTag";

export interface IArchiveList {
  posts: IArchiveNode[];
}

interface IArchiveItem {
  title: string;
  path: string;
  date: string;
  addOnRight?: React.ReactNode;
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

  const ref = useRef(null);
  const rect = useRect(ref);

  const isLarge = rect.width >= ds.screen.m;

  return (
    <div
      ref={ref}
      css={{
        ...position("relative"),
        fontSize: ds.size.s,

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
        const postTags = node.frontmatter.tags.map((tag: string) => (
          <PostTag key={tag} tag={tag} />
        ));

        return (
          <ArchiveItem
            key={node.fields.slug}
            title={node.frontmatter.title}
            path={node.fields.slug}
            date={node.frontmatter.date}
            addOnRight={isLarge && postTags}
          />
        );
      })}
    </div>
  );
};

const ArchiveItem = ({ path, title, date, addOnRight }: IArchiveItem) => {
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
          ...padding(rhythm(3 / 4), 0),
        }}>
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
          css={{
            ...ellipsis(),
            marginLeft: rhythm(7 / 8),
          }}>
          <Link
            css={{
              marginRight: rhythm(1 / 3),
              color: ds.color.textLight,
            }}
            to={path}>
            <span ref={hoverRef}>{title}</span>
          </Link>
          {addOnRight}
        </div>
      </div>
      <div
        css={{
          marginLeft: rhythm(10 / 9),
        }}>
        <time
          css={{
            width: 90,
            minWidth: 90,
            color: rgba(ds.color.textLight, 0.3),
          }}>
          {date}
        </time>
      </div>
    </div>
  );
};
