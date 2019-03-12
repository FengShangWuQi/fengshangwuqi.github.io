import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { CSSObject } from "@emotion/core";

import { useDesignSystem } from "src-core/ds";
import { Discussion } from "src-core/disqus";
import { margin, padding } from "src-core/style";

import { Layout } from "../common/Layout";
import { Wrapper } from "../common/Wrapper";
import { Footer } from "../common/Footer";
import { rhythm } from "../common/typography";
import { PostHeader } from "../post/PostHeader";
import { PrismTheme } from "../post/PrismTheme";
import { PostTag } from "../post/PostTag";
import { PostContainer } from "../post/PostContainer";

export const postQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
      pathPrefix
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
              aspectRatio
              src
              srcSet
              sizes
              tracedSVG
            }
          }
        }
      }
    }
  }
`;

const BlogPost = ({
  data: {
    site: {
      siteMetadata: { title: metaTitle, siteUrl },
      pathPrefix,
    },
    markdownRemark: {
      html,
      fields: { slug },
      frontmatter: {
        title: postTitle,
        date,
        tags,
        cover: {
          childImageSharp: { fluid },
        },
      },
    },
  },
}: any) => {
  return (
    <Layout>
      <Helmet title={`${postTitle} - ${metaTitle}`} />
      <PrismTheme />

      <PostHeader>
        <Img fluid={fluid} />
      </PostHeader>

      <Wrapper>
        <h1>{postTitle}</h1>

        <PostDate style={{ marginTop: 5 }} date={date} />
        <PostTags tags={tags} />

        <PostContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PostContainer>
      </Wrapper>

      <Footer>
        <PostEditLink slug={slug} />
      </Footer>

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

const PostEditLink = ({ slug }: { slug: string }) => (
  <div>
    <a
      href={`https://github.com/FengShangWuQi/fengshangwuqi.github.io/blob/dev/posts${slug}/index.md`}
      target="_blank"
      rel="noopener noreferrer">
      Edit this post
    </a>
  </div>
);

const PostDiscussion = ({ url, slug }: { url: string; slug: string }) => (
  <div
    css={{
      ...margin(rhythm(3), "auto", 0),
      ...padding(0, 25),
      maxWidth: 700,
    }}>
    <Discussion
      shortname="feng-shang-wu-qi-de-ri-zhi"
      config={{
        identifier: slug,
        url,
      }}
    />
  </div>
);

export default BlogPost;
