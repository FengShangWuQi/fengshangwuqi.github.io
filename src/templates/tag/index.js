import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import { PostList } from '../../components/Post';

class TagTemplate extends Component {
	render() {
		const { pageContext, t } = this.props;
		const { post, tag } = pageContext;
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
			<Layout>
				<Helmet title={`${tag} - ${t('title')}`} />
				<Header left={left} bottom={bottom} />
				<PostList posts={post} totalCount={post.length} />
			</Layout>
		);
	}
}

TagTemplate.propTypes = {
	pageContext: PropTypes.object,
	t: PropTypes.func.isRequired,
};

export default translate('translation')(TagTemplate);
