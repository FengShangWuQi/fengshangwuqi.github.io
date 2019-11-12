import React from "react";
import { Link } from "gatsby";
import Img, { GatsbyImageProps, FluidObject } from "gatsby-image";
import { ellipsis, margin } from "polished";

import { useDesignSystem } from "src-core/ds";

import { PostDate, PostTags } from "../templates/blog-post";

export interface ILatestList {
  posts: INode[];
}

interface ILatestItem {
  title: string;
  original: boolean;
  path: string;
  tags: string[];
  excerpt: string;
  date: string;
  fluid: FluidObject;
}

interface INode {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    excerpt: string;
    frontmatter: {
      title: string;
      original: boolean;
      tags: string[];
      date: string;
      cover: {
        childImageSharp: GatsbyImageProps;
      };
    };
  };
}

export const LatestList = ({ posts }: ILatestList) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gridGap: 50,
      }}>
      {posts.map(({ node }: INode) => (
        <LatestItem
          key={node.fields.slug}
          excerpt={node.excerpt}
          path={node.fields.slug}
          title={node.frontmatter.title}
          original={node.frontmatter.original}
          tags={node.frontmatter.tags}
          date={node.frontmatter.date}
          fluid={node.frontmatter.cover.childImageSharp.fluid! as FluidObject}
        />
      ))}
    </div>
  );
};

const LatestItem = ({
  path,
  title,
  tags,
  fluid,
  date,
  excerpt,
}: ILatestItem) => {
  const ds = useDesignSystem();

  return (
    <div>
      <Img fluid={fluid} />
      <div
        css={{
          marginTop: 24,
        }}>
        <Link
          css={{ ...ellipsis(), fontWeight: "bold" }}
          to={path}
          title={title}>
          {title}
        </Link>
      </div>

      <PostDate date={date} />
      <PostTags tags={tags} />

      <p
        css={{
          ...margin(16, 0),
          fontSize: ds.fontSize.xs,
          color: ds.color.textLight,
        }}>
        {excerpt}
      </p>
    </div>
  );
};
