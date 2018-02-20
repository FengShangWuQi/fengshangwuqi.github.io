import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './style.css';

const Archive = ({ path, title, date }) => {
  return (
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
};

Archive.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Archive;
