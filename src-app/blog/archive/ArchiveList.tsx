import React from "react";
import { Link } from "gatsby";

export interface IArchiveList {
  posts: IArchiveNode[];
}

interface IArchiveItem {
  title: string;
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
      title: string;
      date: string;
    };
  };
}

export const ArchiveList = ({ posts }: IArchiveList) => {
  return (
    <div>
      {posts.map(({ node }: IArchiveNode) => (
        <ArchiveItem
          key={node.fields.slug}
          title={node.frontmatter.title}
          path={node.fields.slug}
          date={node.frontmatter.date}
        />
      ))}
    </div>
  );
};

const ArchiveItem = ({ path, title, date }: IArchiveItem) => {
  return (
    <div>
      <time>{date}</time>&nbsp;&nbsp;<Link to={path}>{title}</Link>
    </div>
  );
};
