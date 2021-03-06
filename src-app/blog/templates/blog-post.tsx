import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { CSSObject } from "@emotion/react";
import { margin } from "polished";

import { useDesignSystem, PrismTheme } from "src-core/ds";
import { mq } from "src-core/style";
import { SEO } from "src-core/seo";

import { Layout, Wrapper } from "../common";
import { Discussion, PostHeader, PostTag, PostContainer } from "../post";

export const postQuery = graphql`
  query($slug: String!) {
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
        original
        cover {
          childImageSharp {
            fluid(maxWidth: 1200, maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const BlogPost = ({ data: { site, mdx } }: any) => {
  const {
    siteMetadata: { title: siteTitle, siteUrl, author },
    pathPrefix,
  } = site;
  const {
    body,
    fields: { slug },
    excerpt,
    frontmatter: {
      title: postTitle,
      date,
      tags,
      cover: {
        childImageSharp: { fluid },
      },
    },
  } = mdx;

  return (
    <Layout>
      <SEO
        title={`${postTitle} - ${siteTitle}`}
        description={excerpt}
        imageSrc={`${siteUrl}${pathPrefix}${fluid.src}`}
        keywords={[postTitle, siteTitle, author, ...tags]}
        url={`${siteUrl}${pathPrefix}${slug}`}
        author={author}
        twitter="@fengshangwuqi"
        datePublished={date}
        isBlogPost
      />
      <PrismTheme />

      <PostHeader>
        <Img
          css={{
            height: "100%",
          }}
          fluid={fluid}
        />
      </PostHeader>

      <Wrapper withShadow>
        <PostContainer>
          <h1>{postTitle}</h1>

          <PostDate style={{ marginTop: 5 }} date={date} />
          <PostTags tags={tags} />

          <MDXRenderer>{body}</MDXRenderer>
        </PostContainer>
      </Wrapper>

      <PostDiscussion url={`${siteUrl}${pathPrefix}${slug}`} slug={slug} />
    </Layout>
  );
};

export const PostDate = ({
  date,
  style,
}: {
  date: string;
  style?: CSSObject;
}) => {
  const ds = useDesignSystem();

  return (
    <div
      css={[
        {
          color: ds.color.textLight,
          fontSize: 12,
        },
        { ...style },
      ]}>
      <time>{date}</time>
    </div>
  );
};

export const PostTags = ({ tags }: { tags: string[] }) => (
  <div
    css={{
      marginTop: 5,
    }}>
    {tags.map((tag: string) => (
      <PostTag key={tag} tag={tag} />
    ))}
  </div>
);

const PostDiscussion = ({ url, slug }: { url: string; slug: string }) => {
  const ds = useDesignSystem();

  return (
    <div
      css={mq(["sm"], {
        ...margin(ds.spacing[12], "auto", 0),
        padding: [`0 ${ds.spacing[4]}`, 0],
        maxWidth: 700,
      })}>
      <Discussion
        shortname="feng-shang-wu-qi-de-ri-zhi"
        config={{
          identifier: slug,
          url,
        }}
      />
    </div>
  );
};

export default BlogPost;
