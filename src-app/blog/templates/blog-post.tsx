import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { CSSObject } from "@emotion/core";

import { useDesignSystem } from "src-core/ds";
import { Discussion } from "src-core/disqus";
import { size, margin, padding } from "src-core/style";

import { Header } from "src-components/headers";

import { Layout } from "../common/Layout";
import { Wrapper } from "../common/Wrapper";
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
      frontmatter: { title: postTitle, date, tags },
    },
  },
}: any) => {
  return (
    <Layout>
      <Helmet title={`${postTitle} - ${metaTitle}`} />
      <PrismTheme />

      <div
        css={{
          ...size("100%", 400),
        }}>
        <Header />
      </div>

      <Wrapper>
        <h1>{postTitle}</h1>

        <PostDate style={{ marginTop: 5 }} date={date} />
        <PostTags tags={tags} />

        <PostContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PostContainer>
      </Wrapper>

      <PostEditLink slug={slug} />

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
  <div
    css={{
      marginTop: 40,
    }}>
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
      ...margin(70, "auto", 0),
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
