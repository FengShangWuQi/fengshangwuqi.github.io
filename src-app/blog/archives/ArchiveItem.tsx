import { Link } from 'gatsby';

import { React } from 'src-core/react';

import '../styles/ArchiveItem.css';

export const ArchiveItem = ({ path, title, date }: any) => (
  <li className="archive">
    <div className="archive-title">
      <Link to={path}>
        <div className="archive-title-text">{title}</div>
        <time className="archive-published" dateTime={date}>
          {date}
        </time>
      </Link>
    </div>
  </li>
);
