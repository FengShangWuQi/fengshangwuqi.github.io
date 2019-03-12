import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Header } from "src-components/headers";
import { Pagination } from "src-components/pagers";

import { Layout } from "../common/Layout";
import { Footer } from "../common/Footer";
import { Archive } from "../archive";

export const ArchiveQuery = graphql`
  query($size: Int!, $offset: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: $size
      skip: $offset
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
            tags
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`;

export default ({
  data: {
    site: {
      siteMetadata: { title },
    },
    allMarkdownRemark: { edges: posts, totalCount },
  },
  pageContext: { total, size, offset },
}: any) => (
  <Layout>
    <Helmet title={`归档 - ${title}`} />
    <Header />

    <Archive posts={posts} totalCount={totalCount} />

    <Footer>
      <Pagination
        total={total}
        size={size}
        offset={offset}
        pathPrefix="archive"
      />
    </Footer>
  </Layout>
);
