import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Posts from '../../components/Posts';

import './style.css';

class TagTemplate extends Component {
  render() {
    const { pathContext, t } = this.props;
    const { post, tag } = pathContext;
    const left = (
      <div className="header-left-content">
        <div className="posts-total-count">{`${post.length} ${t(
          'total'
        )}`}</div>
        <h1>{tag}</h1>
      </div>
    );
    const bottom = (
      <div className="header-back">
        <Link to="/">>> {t('title')}</Link>
      </div>
    );

    return (
      <div className="tag">
        <Helmet title={`${tag} - ${t('title')}`} />
        <Header left={left} bottom={bottom} />
        <Posts posts={post} totalCount={post.length} />
      </div>
    );
  }
}

TagTemplate.propTypes = {
  pathContext: PropTypes.object,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(TagTemplate);
