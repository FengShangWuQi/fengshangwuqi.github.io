import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './style.css';

const PostItem = ({ path, tag, title, date, intro, original }) => {
  const tags = tag.split(',').map(t => (
    <Link key={t} to={`/${t}`}>
      {t}
    </Link>
  ));

  return (
    <article className="post-item">
      <header className="post-item-header">
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
            className="post-is-original">
            {original ? '原' : '译'}
          </span>
          {tags}
        </div>
        <h2 className="post-item-header-title">
          <Link to={path}>{title}</Link>
        </h2>
        <time className="post-item-published" dateTime={date}>
          {date}
        </time>
      </header>
      <p
        className="post-item-content"
        dangerouslySetInnerHTML={{ __html: intro }}
      />
      <Link to={path}>
        <span className="post-item-read-more">
          阅读全文
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

PostItem.propTypes = {
  path: PropTypes.string.isRequired,
  tag: PropTypes.string,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
};

export default PostItem;
