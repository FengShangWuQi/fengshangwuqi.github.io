import { React } from 'src-core/react';

import { css } from 'src-core/style';

import { Nav } from './Nav';

export const Header = ({
  leftCenter,
  center,
  bottom,
}: {
  leftCenter?: React.ReactNode;
  center?: React.ReactNode;
  bottom?: React.ReactNode;
}) => (
  <div>
    <a
      href="https://github.com/FengShangWuQi/fengshangwuqi.github.io"
      target="_blank"
      rel="noopener noreferrer">
      <img
        {...css({
          position: 'absolute',
          top: 0,
          left: 0,
          border: 0,
        })}
        src="https://camo.githubusercontent.com/82b228a3648bf44fc1163ef44c62fcc60081495e/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f7265645f6161303030302e706e67"
        alt="Fork me on GitHub"
        data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png"
      />
    </a>
    <Nav />
    {leftCenter && <div>{leftCenter}</div>}
    {center && <div>{center}</div>}
    {bottom && <div>{bottom}</div>}
  </div>
);
