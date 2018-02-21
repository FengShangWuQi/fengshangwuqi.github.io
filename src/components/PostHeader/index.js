import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { translate } from 'react-i18next';

import Header from '../Header';

import './style.css';

const BlogHeader = ({ title, tag, path, original, date, t }) => {
  const tags = tag.split(',').map(t => (
    <Link key={t} to={`/${t}`}>
      {t}
    </Link>
  ));
  const center = (
    <div className="post-header">
      <div className="header-tag">
        <span
          style={
            original
              ? {
                  backgroundColor: 'rgba(242,174,67,0.25)',
                  color: '#F2AE43',
                  marginLeft: -30,
                }
              : {
                  backgroundColor: 'rgba(86, 192, 224, 0.25)',
                  color: '#56c0e0',
                  marginLeft: -30,
                }
          }
          className="post-is-original"
        >
          {original ? '原' : '译'}
        </span>
        {tags}
      </div>
      <h1 className="post-header-title">{title}</h1>
    </div>
  );
  const bottom = (
    <div style={{ justifyContent: 'flex-end' }} className="author-content">
      <div
        style={{
          marginRight: 15,
          letterSpacing: 1,
          textAlign: 'right',
        }}
        className="author-info"
      >
        <div className="author-info-title">
          <Link to="/">{t('title')}</Link>
        </div>
        <div>{date}</div>
      </div>
      <div className="author-avatar">
        <img
          className="author-avatar-img"
          src={require('../../images/avatar.jpg')}
          alt="枫上雾棋"
        />
      </div>
    </div>
  );

  return (
    <Header
      style={{
        backgroundImage: `url(${require(`../../pages${path}header.png`)})`,
      }}
      center={center}
      bottom={bottom}
    />
  );
};

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  original: PropTypes.bool.isRequired,
  date: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(BlogHeader);
