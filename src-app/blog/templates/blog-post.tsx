import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { rgba } from "polished";

import { flex, size, border, margin, padding } from "src-core/style";

import { Header } from "src-components/headers";

import { Layout } from "../common/Layout";
import { PrismTheme } from "../post/PrismTheme";

export const postQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
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
      siteMetadata: { title: metaTitle },
    },
    markdownRemark: {
      html,
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

        <div
          css={{
            "& a:not(.anchor)": {
              ...border("bottom", 1, "solid", "#ddd"),
              background: rgba("#ddd", 0.3),
            },
            ul: {
              marginTop: 20,
              marginLeft: 25,

              "& li": {
                marginTop: 12,
              },
            },
            p: {
              marginTop: 30,
            },
            blockquote: {
              ...padding(20, 45, 20, 26),
              ...border("left", 9, "solid", "#ffe564"),
              marginTop: 30,
              background: rgba("#ffe564", 0.3),
              overflow: "auto",

              "& p": {
                marginTop: 15,

                "&:first-of-type": {
                  marginTop: 0,
                },
              },
            },
            ".twitter-content": {
              ...flex({ justifyContent: "center" }),
            },
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  );
};

export default BlogPost;
