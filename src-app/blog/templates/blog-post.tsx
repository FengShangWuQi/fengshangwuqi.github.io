import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image";
import { margin } from "polished";

import { ITheme, PrismTheme } from "src-core/ds";
import { mq } from "src-core/style";
import { SEO } from "src-core/seo";

import { Layout, Wrapper, Nav } from "../common";
import { Discussion, PostHeader, PostTag, PostContainer } from "../post";

export const query = graphql`
  query PostPageQuery($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        author
      }
      pathPrefix
    }
    mdx(fields: { slug: { eq: $slug } }) {
      body
      excerpt(pruneLength: 200)
      fields {
        slug
      }
      internal {
        content
      }
      frontmatter {
        title
        tags
        date(formatString: "YYYY-MM-DD")
        cover {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data: { site, mdx }, location: { pathname } }: any) => {
  const {
    siteMetadata: { title: siteTitle, siteUrl, author },
    pathPrefix,
  } = site;
  const {
    body,
    fields: { slug },
    excerpt,
    frontmatter: { title: postTitle, date, tags, cover },
  } = mdx;

  return (
    <Layout>
      <SEO
        title={`${postTitle} - ${siteTitle}`}
        description={excerpt}
        image={`${siteUrl}${pathPrefix}${getSrc(cover)}`}
        keywords={[postTitle, siteTitle, author, ...tags]}
        url={`${siteUrl}${pathPrefix}${slug}`}
        author={author}
        datePublished={date}
        type="article"
      />
      <PrismTheme />

      <Nav pathname={pathname} />
      <PostHeader>
        <GatsbyImage
          css={{
            height: "100%",
          }}
          image={getImage(cover)!}
          alt={postTitle}
        />
      </PostHeader>

      <Wrapper withShadow>
        <PostContainer>
          <h1>{postTitle}</h1>

          <div
            css={{
              marginTop: 5,
            }}>
            {tags.map((tag: string) => (
              <PostTag key={tag} tag={tag} />
            ))}
          </div>

          <MDXRenderer>{body}</MDXRenderer>
        </PostContainer>
      </Wrapper>

      <div
        css={(ds: ITheme) =>
          mq(["sm"], {
            ...margin(ds.spacing[12], "auto", 0),
            padding: [`0 ${ds.spacing[4]}`, 0],
            maxWidth: 700,
          })
        }>
        <Discussion
          shortname="feng-shang-wu-qi-de-ri-zhi"
          config={{
            identifier: slug,
            url: `${siteUrl}${pathPrefix}${slug}`,
          }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;
