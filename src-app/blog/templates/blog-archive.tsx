import React from "react";
import { graphql } from "gatsby";

import { SEO } from "src-core/seo";

import { Layout, Wrapper, Nav } from "../common";
import { ArchiveList } from "../archive/archive-list";

export const query = graphql`
  query ArchivePageQuery {
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
  location: { pathname },
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

      <Nav pathname={pathname} />

      <Wrapper>
        <ArchiveList posts={posts} />
      </Wrapper>
    </Layout>
  );
};

export default BlogArchive;
