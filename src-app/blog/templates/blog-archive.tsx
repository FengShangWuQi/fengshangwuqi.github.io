import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import { React } from 'src-core/react';

import { Layout } from '../common/Layout';
import { Header } from '../common/Header';
import { ArchiveItem } from '../archives/ArchiveItem';

import '../styles/blog-archive.css';

export default ({ pageContext }: { pageContext: any }) => {
  const { archives, totalCount } = pageContext;

  const leftCenter = (
    <div className="header-left-content">
      {<div className="posts-total-count">{`${totalCount} 篇文章`}</div>}
      <h1>归档</h1>
    </div>
  );
  const bottom = (
    <div className="header-back">
      <Link to="/">>> 枫上雾棋的日志</Link>
    </div>
  );

  return (
    <Layout>
      <Helmet title="归档 - 枫上雾棋的日志" />
      <Header leftCenter={leftCenter} bottom={bottom} />

      <div className="page-container">
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
            <div className="archives-item" key={year}>
              <h2 className="archive-year">{year}</h2>
              <ul className="archives-list">{archive}</ul>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
