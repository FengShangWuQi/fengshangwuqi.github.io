import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { get } from 'lodash';

import { loadScript } from '../../utils';
import Layout from '../../components/Layout';
import { PostHeader } from '../../components/Post';

import './style.css';

class PostTemplate extends Component {
  componentDidMount() {
    [
      'https://feng-shang-wu-qi-de-ri-zhi.disqus.com/embed.js',
      'https://platform.twitter.com/widgets.js',
    ].map(url => loadScript(url));
  }

  render() {
    const { data } = this.props;
    const { html, fields, frontmatter } = get(data, 'markdownRemark');
    const { title, tag, date, original } = frontmatter;

    return (
      <Layout>
        <Helmet title={`${title} - 枫上雾棋的日志`} />
        <PostHeader
          title={title}
          original={original}
          path={fields.slug}
          tag={tag}
          date={date}
        />
        <div style={{ top: -25 }} className="page-container">
          <div className="post-md" dangerouslySetInnerHTML={{ __html: html }} />
          <div id="disqus_thread" />
        </div>
      </Layout>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object,
};

export default PostTemplate;

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
