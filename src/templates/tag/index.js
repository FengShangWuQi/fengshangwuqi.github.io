import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { PostList } from '../../components/Post';

class TagTemplate extends Component {
  render() {
    const { pageContext } = this.props;
    const { post, tag } = pageContext;
    const leftCenter = (
      <div className="header-left-content">
        <div className="posts-total-count">{`${post.length} 篇文章`}</div>
        <h1>{tag}</h1>
      </div>
    );
    const bottom = (
      <div className="header-back">
        <Link to="/">>> 枫上雾棋的日志</Link>
      </div>
    );

    return (
      <Layout>
        <Helmet title={`${tag} - 枫上雾棋的日志`} />
        <Header leftCenter={leftCenter} bottom={bottom} />
        <PostList posts={post} totalCount={post.length} />
      </Layout>
    );
  }
}

TagTemplate.propTypes = {
  pageContext: PropTypes.object,
};

export default TagTemplate;
