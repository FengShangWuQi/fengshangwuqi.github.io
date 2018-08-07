import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Archive from '../../components/Archive';

import './style.css';

const ArchivesTemplate = ({ pageContext, t }) => {
	const { archives, totalCount } = pageContext;

	const leftCenter = (
		<div className="header-left-content">
			{<div className="posts-total-count">{`${totalCount} ${t('total')}`}</div>}
			<h1>{t('archives')}</h1>
		</div>
	);
	const bottom = (
		<div className="header-back">
			<Link to="/">>> {t('title')}</Link>
		</div>
	);

	return (
		<Layout>
			<Helmet title={`${t('archives')} - ${t('title')}`} />
			<Header leftCenter={leftCenter} bottom={bottom} />

			<div className="page-container">
				{Object.keys(archives).map(date => {
					const year = date.substr(4);
					const archive = archives[date].map(node => (
						<Archive
							key={node.fields.slug}
							path={node.fields.slug}
							title={node.frontmatter.title}
							date={node.frontmatter.date.substr(5)}
						/>
					));
					return (
						<div className="archives-item" key={year}>
							<h2 className="archive-year">{year}</h2>
							<ul className="archives-list">{archive}</ul>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

ArchivesTemplate.propTypes = {
	pageContext: PropTypes.object,
	t: PropTypes.func.isRequired,
};

export default translate('translation')(ArchivesTemplate);
