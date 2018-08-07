import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { translate } from 'react-i18next';

import Translate from '../Translate';

import './style.css';

class Nav extends Component {
	state = { sideNav: false };

	renderNav = ({ title, link }, side) => (
		<li
			key={title}
			className={side ? 'header-sideNav-item' : 'header-nav-item'}>
			<Link to={link}>{this.props.t(title)}</Link>
		</li>
	);

	toggleSideNav = () => {
		this.setState(preState => ({
			sideNav: !preState.sideNav,
		}));
	};

	handleSideNavClick = e => {
		if (e.target.nodeName.toLowerCase() === 'a') {
			this.toggleSideNav();
		}
	};

	render() {
		const { t } = this.props;
		const { sideNav } = this.state;
		const navs = [
			{ title: 'archives', link: '/archives' },
			{ title: 'latest', link: '/' },
		];
		const rssLi = (
			<a href="/rss.xml" rel="noopener noreferrer" title="RSS">
				RSS
			</a>
		);

		return (
			<nav className="header-nav">
				<ul className="header-nav-ul">
					{navs.map(nav => this.renderNav(nav, false))}
					<li key="rss" className="header-nav-item">
						{rssLi}
					</li>
					<Translate toggle={false} />
				</ul>
				<ul
					style={sideNav ? { display: 'block', left: 0, right: 0 } : {}}
					className="header-sideNav-ul"
					onClick={e => this.handleSideNavClick(e)}>
					<li className="header-sideNav-item">
						<img
							className="header-sideBar-close-img"
							src={require('../../../../images/close.png')}
							alt="close"
							onClick={this.toggleSideNav}
						/>
					</li>
					<li className="header-sideNav-item header-sideNav-title">
						{t('menu')}
					</li>
					<Translate toggle />
					{navs.map(nav => this.renderNav(nav, true))}
					<li key="rss" className="header-sideNav-item">
						{rssLi}
					</li>
				</ul>
				<img
					style={{ top: sideNav ? -100 : 32 }}
					className="header-sideBar-img"
					src={require('../../../../images/sideBar.png')}
					alt="sideBar"
					onClick={this.toggleSideNav}
				/>
			</nav>
		);
	}
}

Nav.propTypes = {
	t: PropTypes.func.isRequired,
};

export default translate('translation')(Nav);
