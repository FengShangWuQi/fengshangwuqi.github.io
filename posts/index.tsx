import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import { Layout } from "src-app/blog/common/Layout";
import { Archive } from "src-app/blog/archive";

import { Header } from "src-components/headers";

export default () => (
  <StaticQuery
    query={archiveQuery}
    render={({
      site: {
        siteMetadata: { title },
      },
      allMarkdownRemark: { edges: posts, totalCount },
    }) => (
      <Layout>
        <Helmet title={title} />
        <Header />
        <Archive posts={posts} totalCount={totalCount} />
      </Layout>
    )}
  />
);

const archiveQuery = graphql`
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
