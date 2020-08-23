import React from "react";
import { Link } from "gatsby";
import Img, { GatsbyImageFluidProps, FluidObject } from "gatsby-image";
import { ellipsis, margin } from "polished";

import { useDesignSystem } from "src-core/ds";

import { PostDate, PostTags } from "../templates/blog-post";

interface ILatestItem {
  title: string;
  original: boolean;
  path: string;
  tags: string[];
  excerpt: string;
  date: string;
  fluid: FluidObject;
}

export interface INode {
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
        childImageSharp: GatsbyImageFluidProps;
      };
    };
  };
}

export const LatestItem = ({
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
          css={{ ...ellipsis(), fontWeight: ds.weight.bold }}
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
          fontSize: ds.size.xs,
          color: ds.color.textLight,
        }}>
        {excerpt}
      </p>
    </div>
  );
};
