import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { translate } from 'react-i18next';

import i18n from '../../i18n';
import Footer from '../Footer';

import 'normalize.css';
import 'prismjs/themes/prism-tomorrow.css';
import './style.css';

translate.setI18n(i18n);

class Layout extends React.Component {
	render() {
		const { children } = this.props;

		return (
			<div>
				<header
					style={{
						position: 'absolute',
						height: 480,
						width: '100%',
						background: '#101012',
					}}
				/>
				{children}
				<Footer />
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.array,
};

export default Layout;
