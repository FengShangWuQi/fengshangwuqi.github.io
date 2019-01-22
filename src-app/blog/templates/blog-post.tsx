import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../common/Layout";

export default class BlogPost extends React.Component<{ data: any }> {
  render() {
    const {
      markdownRemark: {
        html,
        frontmatter: { title },
      },
    } = this.props.data;

    return (
      <Layout>
        <Helmet title={`${title} - 枫上雾棋的日志`} />
        <div style={{ top: -25 }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div id="disqus_thread" />
        </div>
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
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
