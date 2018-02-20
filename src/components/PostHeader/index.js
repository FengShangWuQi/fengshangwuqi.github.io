import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Header from '../Header';

import './style.css';

class PostHeader extends Component {
  render() {
    const { totalCount, t } = this.props;
    const left = (
      <div className="author-content">
        <div style={{ width: 100 }} className="author-avatar">
          <img
            style={{ marginBottom: 26 }}
            className="author-avatar-img"
            src={require('../../images/avatar.jpg')}
            alt="枫上雾棋"
          />
        </div>
        <div className="author-info">
          <div className="posts-total-count">{`${totalCount} ${t(
            'total'
          )}`}</div>
          <h1>{t('title')}</h1>
          <ul className="author-link">
            <li>
              <a
                href="https://twitter.com/fengshangwuqi"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <img
                  className="author-link-img"
                  src={require('../../images/twitter.png')}
                  alt="twitter"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/FengShangWuQi"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img
                  className="author-link-img"
                  src={require('../../images/GitHub.png')}
                  alt="github"
                />
              </a>
            </li>
            <li>
              <div id="wechat" title="WeChat">
                <img
                  className="author-link-img"
                  src={require('../../images/wechat.png')}
                  alt="WeChat"
                />
                <div className="qrcode">
                  <img
                    className="qrcode-img"
                    src={require('../../images/qrcode.jpeg')}
                    alt="QR code"
                  />
                </div>
              </div>
            </li>
            <li>
              <img
                className="author-link-img"
                src={require('../../images/email.png')}
                alt="email"
                title="fengshangwuqi@gmail.com"
              />
            </li>
            <li>
              <a href="/rss.xml" rel="noopener noreferrer" title="RSS">
                <img
                  className="author-link-img"
                  src={require('../../images/rss.png')}
                  alt="rss"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );

    return <Header left={left} />;
  }
}

PostHeader.propTypes = {
  totalCount: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(PostHeader);
