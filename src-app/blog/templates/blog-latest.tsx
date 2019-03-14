import React from "react";
import { graphql } from "gatsby";

import { Header } from "src-components/headers";
import { SEO } from "src-components/seo";

import { Layout } from "../common/Layout";

import { Latest } from "../latest";

export const latestQuery = graphql`
  {
    site {
      siteMetadata {
        title
        author
        siteUrl
        description
        social {
          Twitter
          GitHub
        }
        contact {
          Email
        }
      }
      pathPrefix
    }
    allMarkdownRemark(
      limit: 6
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
      siteMetadata: { title, description, siteUrl, author, social, contact },
      pathPrefix,
    },
    allMarkdownRemark: { edges: posts },
  },
}: any) => (
  <Layout>
    <SEO
      title={title}
      description={description}
      keywords={[title, author]}
      url={`${siteUrl}${pathPrefix}`}
      imageSrc={require("static/cover.png")}
      author={author}
      twitterCreator={social["Twitter"]}
    />

    <Header social={social} contact={contact} />

    <Latest posts={posts} />
  </Layout>
);
