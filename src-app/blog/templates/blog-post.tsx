import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { CSSObject } from "@emotion/core";

import { useDesignSystem } from "src-core/ds";
import { Discussion } from "src-core/disqus";
import { rhythm, margin, padding, ellipsis } from "src-core/style";

import { SEO } from "src-components/seo";

import { Layout } from "../common/Layout";
import { Wrapper } from "../common/Wrapper";
import { Footer } from "../common/Footer";
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
        author
        social {
          Twitter
          GitHub
        }
        repository
      }
      pathPrefix
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
      siteMetadata: { title: metaTitle, siteUrl, author, social, repository },
      pathPrefix,
    },
    markdownRemark: {
      html,
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
    },
  },
}: any) => {
  return (
    <Layout>
      <SEO
        title={postTitle}
        description={excerpt}
        imageSrc={`${siteUrl}${pathPrefix}${fluid.src}`}
        keywords={[postTitle, metaTitle, author, ...tags]}
        url={`${siteUrl}${pathPrefix}${slug}`}
        author={author}
        twitter={social["Twitter"]}
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

      <Wrapper>
        <h1
          css={{
            ...ellipsis(),
          }}>
          {postTitle}
        </h1>

        <PostDate style={{ marginTop: 5 }} date={date} />
        <PostTags tags={tags} />

        <PostContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PostContainer>
      </Wrapper>

      <Footer>
        <PostEditLink
          username={social["GitHub"]}
          slug={slug}
          repository={repository}
        />
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

const PostEditLink = ({
  slug,
  username,
  repository,
}: {
  slug: string;
  username: string;
  repository: string;
}) => (
  <div>
    <a
      href={`https://github.com/${username}/${repository}/blob/dev/posts${slug}/index.md`}
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
