import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const SocialLink = ({ social }) => {
	const { title, url } = social;
	let item = null;

	switch (title) {
		case 'WeChat':
			item = (
				<li>
					<div id="WeChat" title="WeChat">
						<img
							className="author-link-img"
							src={require('../../../../../../images/WeChat.png')}
							alt="WeChat"
						/>
						<div className="qrcode">
							<img
								className="qrcode-img"
								src={require('../../../../../../images/QRCode.jpeg')}
								alt="QR Code"
							/>
						</div>
					</div>
				</li>
			);
		case 'Email':
			item = (
				<li>
					<img
						className="author-link-img"
						src={require('../../../../../../images/Email.png')}
						alt="Email"
						title="fengshangwuqi@gmail.com"
					/>
				</li>
			);
		default:
			item = (
				<li>
					<a href={url} target="_blank" rel="noopener noreferrer" title={title}>
						<img
							className="author-link-img"
							src={require(`../../../../../../images/${title}.png`)}
							alt={title}
						/>
					</a>
				</li>
			);
	}

	return item;
};

SocialLink.propTypes = {
	social: PropTypes.object.isRequired,
};

export default SocialLink;
