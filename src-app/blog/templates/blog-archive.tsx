import React from "react";
import { graphql } from "gatsby";

import { Header } from "src-components/headers";
import { Pagination } from "src-components/pagers";
import { SEO } from "src-components/seo";

import { Layout } from "../common/Layout";
import { Footer } from "../common/Footer";
import { Archive } from "../archive";

export const archiveQuery = graphql`
  query($size: Int!, $offset: Int!) {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
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
      siteMetadata: { title, description, siteUrl, author, social, contact },
      pathPrefix,
    },
    allMarkdownRemark: { edges: posts, totalCount },
  },
  pageContext: { total, size, offset },
}: any) => (
  <Layout>
    <SEO
      title={title}
      description={`归档 - ${description}`}
      imageSrc={`${siteUrl}${pathPrefix}${require("static/cover.png")}`}
      keywords={["归档", title, author]}
      url={`${siteUrl}${pathPrefix}/archive`}
      author={author}
      twitter={social["Twitter"]}
      github={social["GitHub"]}
      siteUrl={siteUrl}
    />

    <Header social={social} contact={contact} />

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
