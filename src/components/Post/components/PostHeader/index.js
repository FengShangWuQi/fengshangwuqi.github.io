import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Link } from 'gatsby';

import Header from '../../../Header';

import './style.css';

const PostHeader = ({ title, original, path, tag: postTag, date, t }) => {
	const postTags = postTag.split(',').map(tag => (
		<Link key={tag} to={`/${tag}`}>
			{tag}
		</Link>
	));
	const originalStyle = original
		? {
				backgroundColor: 'rgba(242,174,67,0.25)',
				color: '#F2AE43',
		  }
		: {
				backgroundColor: 'rgba(86, 192, 224, 0.25)',
				color: '#56c0e0',
		  };
	const center = (
		<div className="post-header">
			<div className="header-tag">
				<span style={originalStyle} className="post-is-original">
					{original ? '原' : '译'}
				</span>
				{postTags}
			</div>
			<h1 style={{ fontSize: '2.1em' }} className="post-header-title">
				{title}
			</h1>
		</div>
	);
	const bottom = (
		<div className="post-header-content">
			<div className="post-header-info">
				<div className="post-header-info-title">
					<Link to="/">{t('title')}</Link>
				</div>
				<div>{date}</div>
			</div>
			<div className="author-avatar">
				<img
					className="author-avatar-img"
					src={require('../../../../images/avatar.jpg')}
					alt="枫上雾棋"
				/>
			</div>
		</div>
	);

	return (
		<Header
			style={{
				backgroundImage: `url(${require(`../../../../pages${path}header.png`)})`,
			}}
			center={center}
			bottom={bottom}
		/>
	);
};

PostHeader.propTypes = {
	title: PropTypes.string.isRequired,
	original: PropTypes.bool.isRequired,
	path: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	t: PropTypes.func.isRequired,
};

export default translate('translation')(PostHeader);
