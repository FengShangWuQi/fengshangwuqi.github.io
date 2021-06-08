import React from "react";
import { graphql, navigate } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { margin, border } from "polished";

import { useDesignSystem } from "src-core/ds";
import { SEO } from "src-core/seo";

import { Pagination } from "src-components/navigation/Pagination";

import { Layout, Nav, Wrapper, Footer } from "../common";
import { LatestHeader, LatestItem } from "../latest";

export const latestQuery = graphql`
  query ($size: Int!, $offset: Int!) {
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
            original
            cover {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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

      <Nav />
      <LatestHeader />

      <Wrapper withShadow>
        <LatestTitle>最近的文章</LatestTitle>

        <div
          css={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gridGap: 50,
          }}>
          {posts.map(({ node }: any) => (
            <LatestItem
              key={node.fields.slug}
              excerpt={node.excerpt}
              path={node.fields.slug}
              title={node.frontmatter.title}
              original={node.frontmatter.original}
              tags={node.frontmatter.tags}
              date={node.frontmatter.date}
              image={getImage(node.frontmatter.cover)!}
            />
          ))}
        </div>
      </Wrapper>

      <Footer>
        <Pagination
          css={{
            float: "right",
          }}
          total={total}
          size={size}
          offset={offset}
          onChange={page => navigate(page === 1 ? `/` : `/latest/${page}`)}
        />
      </Footer>
    </Layout>
  );
};

const LatestTitle = ({ children }: { children: React.ReactNode }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={{
        ...margin(ds.spacing[12], 0, ds.spacing[4]),
        ...border("bottom", 3, "solid", ds.color.primary),
        fontSize: ds.size.xl,
      }}>
      {children}
    </div>
  );
};

export default BlogLatest;
