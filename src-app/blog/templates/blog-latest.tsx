import React from "react";
import { graphql, navigate } from "gatsby";
import { clearFix } from "polished";

import { ITheme } from "src-core/ds";
import { SEO } from "src-core/seo";

import { Pagination } from "src-components/navigation/Pagination";

import { Layout, Nav } from "../common";
import { LatestHeader, LatestList } from "../latest";

export const query = graphql`
  query LatestPageQuery($size: Int!, $offset: Int!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        description
      }
      pathPrefix
    }
    allMdx(
      limit: $size
      skip: $offset
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
            cover {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.78)
              }
            }
          }
        }
      }
    }
  }
`;

const BlogLatest = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl, author },
      pathPrefix,
    },
    allMdx: { edges: posts },
  },
  pageContext: { total, size, offset },
  location: { pathname },
}: any) => {
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${pathPrefix}${require("static/cover.png").default}`}
        keywords={[title, author]}
        url={`${siteUrl}${pathPrefix}`}
        author={author}
      />

      <Nav pathname={pathname} />
      <LatestHeader />
      <LatestList posts={posts} />

      <div
        css={(ds: ITheme) => ({
          ...clearFix(),
          margin: ds.spacing[4],
        })}>
        <Pagination
          css={{
            float: "right",
          }}
          total={total}
          size={size}
          offset={offset}
          onChange={page => navigate(page === 1 ? `/` : `/latest/${page}`)}
        />
      </div>
    </Layout>
  );
};

export default BlogLatest;
