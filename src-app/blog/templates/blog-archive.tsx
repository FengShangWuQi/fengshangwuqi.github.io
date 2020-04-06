import React from "react";
import { graphql } from "gatsby";

import { SEO } from "src-core/seo";

import { Layout, Wrapper } from "../common";
import { ArchiveList } from "../archive";

export const archiveQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        siteUrl
        author
      }
      pathPrefix
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
      siteMetadata: { title, description, siteUrl, author },
      pathPrefix,
    },
    allMdx: { edges: posts },
  },
}: any) => (
  <Layout>
    <SEO
      title={title}
      description={`归档 - ${description}`}
      imageSrc={`${siteUrl}${pathPrefix}${require("static/cover.png")}`}
      keywords={["归档", title, author]}
      url={`${siteUrl}${pathPrefix}/archive`}
      author={author}
      twitter="@fengshangwuqi"
    />

    <Wrapper>
      <ArchiveList posts={posts} />
    </Wrapper>
  </Layout>
);

export default BlogArchive;
