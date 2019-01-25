import React from "react";
import { Link } from "gatsby";

export interface IArchiveList {
  posts: INode[];
}

interface IArchiveItem {
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

export const ArchiveList = ({ posts }: IArchiveList) => {
  return (
    <div
      css={{
        boxShadow: "inset 0 0 30px #eee",
      }}>
      {posts.map(({ node }: INode) => (
        <ArchiveItem
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

const ArchiveItem = ({ path, title }: IArchiveItem) => {
  return (
    <div>
      <Link to={path}>{title}</Link>
    </div>
  );
};
