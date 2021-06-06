import React from "react";
import { graphql, Link } from "gatsby";
import { rgba, position } from "polished";

import { ITheme } from "src-core/ds";
import { mq, flex } from "src-core/style";
import { SEO } from "src-core/seo";

import { Layout, Wrapper, Nav } from "../common";
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
        image={`${siteUrl}${pathPrefix}${require("static/cover.png").default}`}
        keywords={["归档", title, author]}
        url={`${siteUrl}${pathPrefix}/archive`}
        author={author}
      />

      <div
        css={{
          ...flex({
            justifyContent: "space-between",
            alignItems: "center",
          }),
        }}>
        <Link
          to="/"
          css={(ds: ITheme) =>
            mq(["lg"], {
              paddingLeft: [ds.spacing[4], ds.spacing[6]],
              fontSize: [ds.size["2xl"], ds.size["3xl"]],
            })
          }>
          枫上雾棋的日志
        </Link>

        <Nav
          css={mq(["sm"], {
            visibility: ["hidden", "visible"],
          })}
        />
      </div>

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
