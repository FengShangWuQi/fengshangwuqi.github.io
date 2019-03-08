import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Header } from "src-components/headers";
import { Pagination } from "src-components/pagers";

import { Layout } from "../common/Layout";
import { Latest } from "../latest";

export const LatestQuery = graphql`
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
      edges {
        node {
          excerpt(pruneLength: 95)
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "YYYY-MM-DD")
            original
            cover {
              childImageSharp {
                fluid(maxWidth: 350, maxHeight: 196) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  tracedSVG
                }
              }
            }
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
    allMarkdownRemark: { edges: posts },
  },
  pageContext: { total, size, offset },
}: any) => (
  <Layout>
    <Helmet title={title} />
    <Header />

    <Latest posts={posts} />
    <Pagination total={total} size={size} offset={offset} />
  </Layout>
);
