import React from "react";
import { graphql } from "gatsby";

import { SEO } from "src-components/seo";

import { Layout } from "../common/Layout";
import { Header } from "../common/Header";

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
    allMdx(limit: 6, sort: { fields: [frontmatter___date], order: DESC }) {
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
                  ...GatsbyImageSharpFluid
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
    allMdx: { edges: posts },
  },
}: any) => (
  <Layout>
    <SEO
      title={title}
      description={description}
      imageSrc={`${siteUrl}${pathPrefix}${require("static/cover.png")}`}
      keywords={[title, author]}
      url={`${siteUrl}${pathPrefix}`}
      author={author}
      twitter={social["Twitter"]}
    />

    <Header social={social} contact={contact} />

    <Latest posts={posts} />
  </Layout>
);
