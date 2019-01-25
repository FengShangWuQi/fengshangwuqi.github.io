import React from "react";
import { Link } from "gatsby";

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
    };
  };
}

export const LatestList = ({ posts }: ILatestList) => {
  return (
    <div
      css={{
        boxShadow: "inset 0 0 30px #eee",
      }}>
      {posts.map(({ node }: INode) => (
        <LatestItem
          key={node.fields.slug}
          title={node.frontmatter.title}
          original={node.frontmatter.original}
          path={node.fields.slug}
          tag={node.frontmatter.tag}
          date={node.frontmatter.date}
          excerpt={node.excerpt}
        />
      ))}
    </div>
  );
};

const LatestItem = ({ path, title }: ILatestItem) => {
  return (
    <div>
      <Link to={path}>{title}</Link>
    </div>
  );
};
