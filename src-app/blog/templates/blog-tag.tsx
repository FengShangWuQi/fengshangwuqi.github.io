import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import { React } from 'src-core/react';

import { Layout } from '../common/Layout';
import { Header } from '../common/Header';
import { LatestList } from '../latest/LatestList';

export default ({ pageContext }: { pageContext: any }) => {
  const { post, tag } = pageContext;
  const leftCenter = (
    <div className="header-left-content">
      <div className="posts-total-count">{`${post.length} 篇文章`}</div>
      <h1>{tag}</h1>
    </div>
  );
  const bottom = (
    <div className="header-back">
      <Link to="/">>> 枫上雾棋的日志</Link>
    </div>
  );

  return (
    <Layout>
      <Helmet title={`${tag} - 枫上雾棋的日志`} />
      <Header leftCenter={leftCenter} bottom={bottom} />
      <LatestList posts={post} totalCount={post.length} />
    </Layout>
  );
};
