import React from "react";
import { graphql, navigate } from "gatsby";

import { Pagination } from "src-components/navigation/Pagination";
import { SEO } from "src-components/seo";

import { Layout } from "../common/Layout";
import { Header } from "../common/Header";
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
    allMdx(
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

const BlogArchive = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl, author, social, contact },
      pathPrefix,
    },
    allMdx: { edges: posts, totalCount },
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
    />

    <Header social={social} contact={contact} />

    <Archive posts={posts} totalCount={totalCount} />

    <Footer>
      <Pagination
        css={{
          float: "right",
        }}
        total={total}
        size={size}
        offset={offset}
        onChange={page =>
          navigate(page === 1 ? `/archive` : `/archive/${page}`)
        }
      />
    </Footer>
  </Layout>
);

export default BlogArchive;
