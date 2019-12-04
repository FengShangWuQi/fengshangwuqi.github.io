import React from "react";
import { Link } from "gatsby";
import { rgba, ellipsis, padding, position, border } from "polished";

import { useHover } from "src-core/hooks";
import { flex, mq } from "src-core/style";
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
        const postTags = node.frontmatter.tags.map((tag: string) => (
          <PostTag key={tag} tag={tag} />
        ));

        return (
          <ArchiveItem
            key={node.fields.slug}
            title={node.frontmatter.title}
            path={node.fields.slug}
            date={node.frontmatter.date}
            addOnRight={postTags}
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
          ...padding(ds.spacing[4], 0),
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
            ...ellipsis(),
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
          <div css={mq(["md"], { display: ["none", "inline-block"] })}>
            {addOnRight}
          </div>
        </div>
      </div>
      <div
        css={{
          marginLeft: ds.spacing[5],
        }}>
        <time
          css={{
            color: rgba(ds.color.textLight, 0.3),
          }}>
          {date}
        </time>
      </div>
    </div>
  );
};
