import React from "react";
import { graphql } from "gatsby";

import { SEO } from "src-core/seo";

import { Layout, Wrapper } from "../common";
import { ArchiveHeader } from "../archive/ArchiveHeader";
import { ArchiveList } from "../archive/ArchiveList";

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
}: any) => {
  return (
    <Layout>
      <SEO
        title={title}
        description={`归档 - ${description}`}
        image={`${siteUrl}${pathPrefix}${require("static/cover.png").default}`}
        keywords={["归档", title, author]}
        url={`${siteUrl}${pathPrefix}/archive`}
        author={author}
      />

      <ArchiveHeader />

      <Wrapper>
        <ArchiveList posts={posts} />
      </Wrapper>
    </Layout>
  );
};

export default BlogArchive;
