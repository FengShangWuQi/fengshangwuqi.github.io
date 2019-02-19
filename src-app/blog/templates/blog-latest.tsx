import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import { Header } from "src-components/headers";

import { Layout } from "../common/Layout";
import { Latest } from "../latest";

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
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
      allMarkdownRemark: { edges: posts },
    }) => (
      <Layout>
        <Helmet title={title} />

        <Header />

        <Latest posts={posts} />
      </Layout>
    )}
  />
);
