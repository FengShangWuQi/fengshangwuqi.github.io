import * as React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";

import { Layout } from "../common/Layout";
import { Header } from "../common/Header";

export default ({ pageContext }: { pageContext: any }) => {
  const { archives, totalCount } = pageContext;

  const leftCenter = (
    <>
      {<div>{`${totalCount} 篇文章`}</div>}
      <h1>归档</h1>
    </>
  );
  const bottom = (
    <div>
      <Link to="/">>> 枫上雾棋的日志</Link>
    </div>
  );

  return (
    <Layout>
      <Helmet title="归档 - 枫上雾棋的日志" />
      <Header leftCenter={leftCenter} bottom={bottom} />

      <div>
        {Object.keys(archives).map(date => {
          const year = date.substr(4);
          const archive = archives[date].map((node: any) => (
            <ArchiveItem
              key={node.fields.slug}
              path={node.fields.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date.substr(5)}
            />
          ));
          return (
            <div key={year}>
              <h2>{year}</h2>
              <ul>{archive}</ul>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

const ArchiveItem = ({ path, title, date }: any) => (
  <li>
    <div>
      <Link to={path}>
        <div>{title}</div>
        <time dateTime={date}>{date}</time>
      </Link>
    </div>
  </li>
);
