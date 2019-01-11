import React from "react";
import Helmet from "react-helmet";

import { LatestList } from "../latest/LatestList";
import { Layout } from "../common/Layout";

export default ({ pageContext }: { pageContext: any }) => {
  const { post, tag } = pageContext;

  return (
    <Layout>
      <Helmet title={`${tag} - 枫上雾棋的日志`} />
      <LatestList posts={post} totalCount={post.length} />
    </Layout>
  );
};
