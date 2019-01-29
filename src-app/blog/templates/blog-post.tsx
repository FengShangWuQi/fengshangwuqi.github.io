import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Global } from "@emotion/core";
import { margin, padding, size, border } from "polished";

import { useDesignSystem } from "src-core/ds";

import { Header } from "src-components/headers";

import { Layout } from "../common/Layout";

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
      frontmatter: { title: postTitle },
    },
  },
}: any) => {
  return (
    <Layout>
      <Helmet title={`${postTitle} - ${metaTitle}`} />
      <PrismTheme />

      <div
        css={{
          ...size(400, "100%"),
        }}>
        <Header />
      </div>

      <div
        css={{
          ...padding(25, 25, 58),
          boxShadow: "inset 0 0 30px #eee",
          overflow: "hidden",
        }}>
        <PostTitle title={postTitle} />

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
};

const PostTitle = ({ title }: { title: string }) => {
  const ds = useDesignSystem();
  return (
    <p
      css={{
        ...margin(12, 0, 26),
        ...border("bottom", 3, "solid", ds.color.primary),
        fontSize: ds.size.l,
        color: ds.color.text,
      }}>
      {title}
    </p>
  );
};

export const PrismTheme = () => {
  const ds = useDesignSystem();
  return (
    <Global
      styles={{
        ".gatsby-highlight": {
          ...margin(25),
          ...padding(0, 15),
          borderRadius: ds.radius.l,
          background: "#282c34",
          color: ds.color.bg,
          overflow: "auto",
        },
        [`.gatsby-highlight > code[class*="language-"],
        .gatsby-highlight > pre[class*="language-"],
        .gatsby-highlight > pre.prism-code`]: {
          ...margin(25),
          fontSize: ds.size.s,
          lineHeight: "20px",
        },
        ".gatsby-highlight-code-line": {
          ...margin("-0.125rem", "calc(-1rem - 15px)"),
          ...padding("0.125rem", "calc(1rem + 15px)"),
          display: "block",
          backgroundColor: "#353b45",
        },
        [`.token.attr-name,
        .token.attr-name`]: {
          color: "#c5a5c5",
        },
        [`.token.comment,
        .token.block-comment,
        .token.prolog,
        .token.doctype,
        .token.cdata`]: {
          color: "#B2B2B2",
        },
        [`.token.property,
        .token.number,
        .token.function-name,
        .token.constant,
        .token.symbol,
        .token.deleted`]: {
          color: "#5a9bcf",
        },
        ".token.boolean": {
          color: "#ff8b50",
        },
        ".token.tag": {
          color: "#fc929e",
        },
        [`.token.string,
        .token.class-name`]: {
          color: "#8dc891",
        },
        ".token.punctuation": {
          color: "#88C6BE",
        },
        [`.token.selector,
          .token.char,
          .token.builtin,
          .token.inserted`]: {
          color: "#D8DEE9",
        },
        ".token.function": {
          color: "#79b6f2",
        },
        [`.token.operator,
        .token.entity,
        .token.url,
        .token.variable`]: {
          color: "#d7deea",
        },
        [`.token.atrule,
        .token.class-name`]: {
          color: "#FAC863",
        },
        ".token.important": {
          fontWeight: 400,
        },
        ".namespace": {
          opacity: 0.7,
        },
      }}
    />
  );
};

export default BlogPost;
