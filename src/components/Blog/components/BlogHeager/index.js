import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Header from '../../../Header';
import SocialLink from './components/SocialLink';

import './style.css';

class BlogHeader extends Component {
	render() {
		const { totalCount, t } = this.props;

		const socials = [
			{
				title: 'Twitter',
				url: 'https://twitter.com/fengshangwuqi',
			},
			{
				title: 'GitHub',
				url: 'https://github.com/FengShangWuQi',
			},
			{
				title: 'WeChat',
			},
			{
				title: 'Email',
			},
			{
				title: 'Newsletter',
				url: 'https://tinyletter.com/fengshangwuqi',
			},
		];
		const leftCenter = (
			<div className="author-content">
				<div style={{ width: 100 }} className="author-avatar">
					<img
						style={{ marginBottom: 25 }}
						className="author-avatar-img"
						src={require('../../../../images/avatar.jpg')}
						alt="枫上雾棋"
					/>
				</div>
				<div className="author-info">
					<div className="posts-total-count">{`${totalCount} ${t(
						'total'
					)}`}</div>
					<h1 style={{ fontSize: '2.25rem' }}>{t('title')}</h1>
					<ul className="author-link">
						{socials.map(social => (
							<SocialLink key={social.title} social={social} />
						))}
					</ul>
				</div>
			</div>
		);

		return <Header leftCenter={leftCenter} />;
	}
}

BlogHeader.propTypes = {
	totalCount: PropTypes.number.isRequired,
	t: PropTypes.func.isRequired,
};

export default translate('translation')(BlogHeader);
