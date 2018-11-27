import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { get } from 'lodash';

import { React } from 'src-core/react';

import { Layout } from 'src-app/blog/common/Layout';
import { BlogHeader } from 'src-app/blog/common/BlogHeader';
import { LatestList } from 'src-app/blog/latest/LatestList';

export default ({ data }: { data: any }) => {
  const { totalCount, edges: posts } = get(data, 'allMarkdownRemark');

  return (
    <Layout>
      <Helmet title="枫上雾棋的日志" />
      <BlogHeader totalCount={totalCount} />
      <LatestList posts={posts} totalCount={totalCount} />
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            tag
            date(formatString: "YYYY-MM-DD")
            original
          }
        }
      }
    }
  }
`;
