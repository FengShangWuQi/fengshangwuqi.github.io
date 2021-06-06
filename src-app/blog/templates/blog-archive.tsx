import React from "react";
import { graphql } from "gatsby";
import { rgba, position } from "polished";

import { ITheme } from "src-core/ds";
import { SEO } from "src-core/seo";

import { Layout, Wrapper } from "../common";
import { IArchiveNode, ArchiveItem } from "../archive";

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
        imageSrc={`${siteUrl}${pathPrefix}${
          require("static/cover.png").default
        }`}
        keywords={["归档", title, author]}
        url={`${siteUrl}${pathPrefix}/archive`}
        author={author}
        twitter="@fengshangwuqi"
      />

      <Wrapper>
        <div
          css={(ds: ITheme) => ({
            ...position("relative"),
            fontSize: ds.size.sm,

            "&:before": {
              ...position("absolute"),
              left: 0,
              top: 0,
              content: `""`,
              width: 2,
              height: "100%",
              background: rgba(ds.color.primary, 0.3),
            },
          })}>
          {posts.map(({ node }: IArchiveNode) => (
            <ArchiveItem
              key={node.fields.slug}
              title={node.frontmatter.title}
              path={node.fields.slug}
            />
          ))}
        </div>
      </Wrapper>
    </Layout>
  );
};

export default BlogArchive;
