import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';

import Translate from '../Translate';

import './style.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { sideNav: false };
  }

  renderNav = ({ title, link }) => (
    <li key={title} className="header-nav-item">
      <Link to={link}>{this.props.t(title)}</Link>
    </li>
  );

  renderSideNav = ({ title, link }) => (
    <li key={title} className="header-sideNav-item">
      <Link to={link}>{this.props.t(title)}</Link>
    </li>
  );

  handleSideNav = () => {
    this.setState(preState => ({
      sideNav: !preState.sideNav,
    }));
  };

  handleSideClick = e => {
    if (e.target.nodeName.toLowerCase() === 'a') {
      this.setState(preState => ({
        sideNav: !preState.sideNav,
      }));
    }
  };

  render() {
    const { t } = this.props;
    const { sideNav } = this.state;
    const navs = [
      { title: 'archives', link: '/archives' },
      { title: 'latest', link: '/' },
      { title: 'about', link: '/' },
    ];

    return (
      <nav className="header-nav">
        <ul className="header-nav-ul">
          {navs.map(nav => this.renderNav(nav))}
          <Translate toggle={false} />
        </ul>
        <ul
          style={sideNav ? { dispaly: 'block', left: 0, right: 0 } : {}}
          className="header-sideNav-ul"
          onClick={e => this.handleSideClick(e)}
        >
          <li className="header-sideNav-item">
            <img
              className="sideBar-close-img"
              src={require('../../images/close.png')}
              alt="close"
              onClick={this.handleSideNav}
            />
          </li>
          <li className="header-sideNav-item sideNav-title">导航</li>
          <Translate toggle />
          {navs.map(nav => this.renderSideNav(nav))}
        </ul>
        <img
          style={{ top: sideNav ? -100 : 32 }}
          className="sideBar-img"
          src={require('../../images/sideBar.png')}
          alt="sideBar"
          onClick={this.handleSideNav}
        />
      </nav>
    );
  }
}

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('translation')(Nav);
