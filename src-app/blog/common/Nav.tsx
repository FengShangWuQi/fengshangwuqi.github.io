import { Link } from 'gatsby';

import { React, Component } from 'src-core/react';

import '../styles/Nav.css';

export class Nav extends Component<{}, { sideNav: boolean }> {
  state = { sideNav: false };

  renderNav = ({
    title,
    link,
    side,
  }: {
    title: string;
    link: string;
    side: boolean;
  }) => (
    <li
      key={title}
      className={side ? 'header-sideNav-item' : 'header-nav-item'}>
      <Link to={link}>{title}</Link>
    </li>
  );

  toggleSideNav = () => {
    this.setState(preState => ({
      sideNav: !preState.sideNav,
    }));
  };

  handleSideNavClick = (e: any) => {
    if (e.target.nodeName.toLowerCase() === 'a') {
      this.toggleSideNav();
    }
  };

  render() {
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
          {navs.map(nav => this.renderNav({ ...nav, side: false }))}
          <li key="rss" className="header-nav-item">
            {rssLi}
          </li>
        </ul>
        <ul
          style={sideNav ? { display: 'block', left: 0, right: 0 } : {}}
          className="header-sideNav-ul"
          onClick={e => this.handleSideNavClick(e)}>
          <li className="header-sideNav-item">
            <img
              className="header-sideBar-close-img"
              src={require('../images/close.png')}
              alt="close"
              onClick={this.toggleSideNav}
            />
          </li>
          <li className="header-sideNav-item header-sideNav-title">导航</li>
          {navs.map(nav => this.renderNav({ ...nav, side: true }))}
          <li key="rss" className="header-sideNav-item">
            {rssLi}
          </li>
        </ul>
        <img
          style={{ top: sideNav ? -100 : 32 }}
          className="header-sideBar-img"
          src={require('../images/sideBar.png')}
          alt="sideBar"
          onClick={this.toggleSideNav}
        />
      </nav>
    );
  }
}
