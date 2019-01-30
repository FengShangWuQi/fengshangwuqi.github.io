import React from "react";
import { Link } from "gatsby";
import Img, { GatsbyImageProps, FluidObject } from "gatsby-image";
import { margin, ellipsis } from "polished";

import { useDesignSystem } from "src-core/ds";

export interface ILatestList {
  posts: INode[];
}

interface ILatestItem {
  title: string;
  original: boolean;
  path: string;
  tag: string[];
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
      tag: string[];
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
        gridTemplateColumns: "repeat(auto-fill, minmax(320px,1fr))",
        gridGap: 50,
      }}>
      {posts.map(({ node }: INode) => (
        <LatestItem
          key={node.fields.slug}
          excerpt={node.excerpt}
          path={node.fields.slug}
          title={node.frontmatter.title}
          original={node.frontmatter.original}
          tag={node.frontmatter.tag}
          date={node.frontmatter.date}
          fluid={node.frontmatter.cover.childImageSharp.fluid!}
        />
      ))}
    </div>
  );
};

const LatestItem = ({ path, title, fluid, date, excerpt }: ILatestItem) => {
  const ds = useDesignSystem();

  return (
    <div>
      <Img fluid={fluid} />
      <div
        css={{
          ...margin(24, 0, 8),
        }}>
        <Link
          css={{ ...ellipsis(), fontWeight: "bold", fontSize: ds.size.m }}
          to={path}
          title={title}>
          {title}
        </Link>
      </div>
      <time
        css={{
          fontSize: ds.size.xs,
        }}>
        {date}
      </time>
      <p
        css={{
          ...margin(16, 0),
          fontSize: ds.size.s,
        }}>
        {excerpt}
      </p>
    </div>
  );
};
