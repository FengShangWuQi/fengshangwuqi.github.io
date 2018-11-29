import { Link } from 'gatsby';

import { React, Component } from 'src-core/react';

export class Nav extends Component<{}, { sideNav: boolean }> {
  state = { sideNav: false };

  renderNav = ({
    title,
    link,
  }: {
    title: string;
    link: string;
    side: boolean;
  }) => (
    <li key={title}>
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
      <nav>
        <ul>
          {navs.map(nav => this.renderNav({ ...nav, side: false }))}
          <li key="rss">{rssLi}</li>
        </ul>
        <ul
          style={sideNav ? { display: 'block', left: 0, right: 0 } : {}}
          onClick={e => this.handleSideNavClick(e)}>
          <li>
            <img
              src={require('../images/close.png')}
              alt="close"
              onClick={this.toggleSideNav}
            />
          </li>
          <li>导航</li>
          {navs.map(nav => this.renderNav({ ...nav, side: true }))}
          <li key="rss">{rssLi}</li>
        </ul>
        <img
          style={{ top: sideNav ? -100 : 32 }}
          src={require('../images/sideBar.png')}
          alt="sideBar"
          onClick={this.toggleSideNav}
        />
      </nav>
    );
  }
}
