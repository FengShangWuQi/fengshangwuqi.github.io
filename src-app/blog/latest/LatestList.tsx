import React from "react";
import { Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ellipsis, margin } from "polished";

import { useDesignSystem } from "src-core/ds";

import { PostDate, PostTag } from "../post";

interface ILatestItem {
  title: string;
  path: string;
  tags: string[];
  excerpt: string;
  date: string;
  image: IGatsbyImageData;
}

export const LatestList = ({ posts }: { posts: ILatestItem[] }) => {
  return (
    <div
      css={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
        gridGap: 50,
      }}>
      {posts.map(({ node }: any) => (
        <LatestItem
          key={node.fields.slug}
          excerpt={node.excerpt}
          path={node.fields.slug}
          title={node.frontmatter.title}
          tags={node.frontmatter.tags}
          date={node.frontmatter.date}
          image={getImage(node.frontmatter.cover)!}
        />
      ))}
    </div>
  );
};

const LatestItem = ({
  path,
  title,
  tags,
  image,
  date,
  excerpt,
}: ILatestItem) => {
  const ds = useDesignSystem();

  return (
    <div>
      <GatsbyImage image={image} alt={title} />

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

      <div
        css={{
          marginTop: 5,
        }}>
        {tags.map((tag: string) => (
          <PostTag key={tag} tag={tag} />
        ))}
      </div>

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
