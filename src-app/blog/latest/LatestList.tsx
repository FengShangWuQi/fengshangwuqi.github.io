import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { ellipsis, margin } from "polished";

import { useDesignSystem } from "src-core/ds";

import { PostDate, PostTags } from "../templates/blog-post";

interface ILatestItem {
  title: string;
  path: string;
  tags: string[];
  excerpt: string;
  date: string;
  image: IGatsbyImageData;
}

export const LatestItem = ({
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
