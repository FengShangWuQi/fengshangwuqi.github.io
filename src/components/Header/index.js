import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Nav from '../Nav';

import './style.css';

class Header extends Component {
  renderHeader(position) {
    const { left, center, bottom } = this.props;
    switch (position) {
      case 'left':
        return (
          <div key="left" className="header-left">
            <div className="header-container">
              <div className="header-inner">{left}</div>
            </div>
          </div>
        );
      case 'center':
        return (
          <div key="center" className="header-center">
            {center}
          </div>
        );
      case 'bottom':
        return (
          <div key="bottom" className="header-bottom">
            {bottom}
          </div>
        );
    }
  }

  render() {
    return (
      <div className="header">
        <div style={this.props.style} className="header-bg" />
        <a
          href="https://github.com/FengShangWuQi/fswq-blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
            src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"
          />
        </a>
        <Nav />
        {Object.keys(this.props).map(p => this.renderHeader(p))}
      </div>
    );
  }
}

Header.propTypes = {
  style: PropTypes.object,
  left: PropTypes.element,
  center: PropTypes.element,
  bottom: PropTypes.element,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(Header);
