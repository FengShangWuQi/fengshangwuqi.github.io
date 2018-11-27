import { React } from 'src-core/react';

import { Nav } from './Nav';

import '../styles/Header.css';

export const Header = ({
  leftCenter,
  center,
  bottom,
  style,
}: {
  leftCenter?: React.ReactNode;
  center?: React.ReactNode;
  bottom?: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <div className="header">
    <div style={style} className="header-bg" />
    <a
      href="https://github.com/FengShangWuQi/fengshangwuqi.github.io"
      target="_blank"
      rel="noopener noreferrer">
      <img
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          border: 0,
        }}
        src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"
      />
    </a>
    <Nav />
    {leftCenter && (
      <div className="header-left-center">
        <div className="header-left-center-container">
          <div className="header-left-center-inner">{leftCenter}</div>
        </div>
      </div>
    )}
    {center && <div className="header-center">{center}</div>}
    {bottom && <div className="header-bottom">{bottom}</div>}
  </div>
);
