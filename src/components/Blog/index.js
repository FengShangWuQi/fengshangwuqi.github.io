import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';

import './style.css';

const Blog = ({ path, tag, title, date, intro, original, t }) => {
  const tags = tag.split(',').map(t => (
    <Link key={t} to={`/${t}`}>
      {t}
    </Link>
  ));

  return (
    <article className="blog">
      <header className="blog-header">
        <div className="header-tag">
          <span
            style={
              original
                ? {
                    backgroundColor: 'rgba(242,174,67,0.25)',
                    color: '#F2AE43',
                  }
                : {
                    backgroundColor: 'rgba(86, 192, 224, 0.25)',
                    color: '#56c0e0',
                  }
            }
            className="post-is-original"
          >
            {original ? '原' : '译'}
          </span>
          {tags}
        </div>
        <h2 className="blog-header-title">
          <Link to={path}>{title}</Link>
        </h2>
        <time className="blog-published" dateTime={date}>
          {date}
        </time>
      </header>
      <p className="blog-content" dangerouslySetInnerHTML={{ __html: intro }} />
      <Link to={path}>
        <span className="read-more">
          {t('readMore')}
          <span>
            <span className="line left" />
            <span className="line top" />
            <span className="line right" />
            <span className="line bottom" />
          </span>
        </span>
      </Link>
    </article>
  );
};

Blog.propTypes = {
  path: PropTypes.string.isRequired,
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(Blog);
