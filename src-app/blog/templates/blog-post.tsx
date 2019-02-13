import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { size, margin, padding } from "src-core/style";
import { Discussion } from "src-core/disqus";

import { Header } from "src-components/headers";

import { Layout } from "../common/Layout";
import { PrismTheme } from "../post/PrismTheme";
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
        tag
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
      frontmatter: { title: postTitle, date },
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

      <div
        css={{
          ...padding(25, 25, 58),
          boxShadow: "inset 0 0 30px #eee",
          overflow: "hidden",
        }}>
        <h1>{postTitle}</h1>

        <div
          css={{
            ...margin(5, 16, 0, 0),
          }}>
          <time>{date}</time>
        </div>

        <PostContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </PostContainer>
      </div>

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
            url: `${siteUrl}${pathPrefix}${slug}`,
          }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;
