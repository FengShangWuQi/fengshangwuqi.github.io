import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { translate } from 'react-i18next';

import BlogHeader from '../components/BlogHeader';
import Posts from '../components/Posts';

class IndexPage extends Component {
  render() {
    const { data, t } = this.props;
    const { totalCount, edges: posts } = get(data, 'allMarkdownRemark');

    return (
      <div className="posts">
        <Helmet title={t('title')} />
        <BlogHeader totalCount={totalCount} />
        <Posts posts={posts} totalCount={totalCount} />
      </div>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(IndexPage);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 220)
          fields {
            slug
          }
          frontmatter {
            title
            tag
            date(formatString: "YYYY-MM-DD")
            original
          }
        }
      }
    }
  }
`;
