import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import { Header } from "src-components/headers";

import { Layout } from "../common/Layout";
import { Archive } from "../archive";

export default () => (
  <StaticQuery
    query={graphql`
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
              fields {
                slug
              }
              frontmatter {
                title
                date(formatString: "YYYY-MM-DD")
              }
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
      allMarkdownRemark: { edges: posts, totalCount },
    }) => (
      <Layout>
        <Helmet title={`归档 - ${title}`} />

        <Header />

        <Archive posts={posts} totalCount={totalCount} />
      </Layout>
    )}
  />
);
