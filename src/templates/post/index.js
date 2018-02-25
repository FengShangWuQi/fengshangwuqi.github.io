import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import MarkNav from 'markdown-navbar';
import VisibilitySensor from 'react-visibility-sensor';
import get from 'lodash/get';

import Header from '../../components/Header';
import PostHeader from '../../components/PostHeader';
import Share from '../../components/Share';

import './style.css';

class PostTemplate extends Component {
  constructor() {
    super();
    this.state = {
      fix: false,
    };
  }

  componentDidMount() {
    (function() {
      var d = document,
        s = d.createElement('script');
      s.src = 'https://feng-shang-wu-qi-de-ri-zhi.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();

    this.modal = document.getElementById('pay-modal');
  }

  onChange = isVisible => {
    this.setState({
      fix: !isVisible,
    });
  };

  openModal = () => {
    this.modal.showModal();
    this.modal.classList.add('modal-active');
  };

  closeModal = e => {
    if (e.target === this.modal) {
      setTimeout(() => this.modal.close(), 200);
      this.modal.classList.remove('modal-active');
    }
  };

  render() {
    const { data, t } = this.props;
    const { fix } = this.state;
    const { siteUrl } = get(data, 'site.siteMetadata');
    const { html, fields, internal, frontmatter } = get(data, 'markdownRemark');
    const { title, tag, date, original } = frontmatter;
    const { content } = internal;

    return (
      <div className="post">
        <Helmet title={`${title} - ${t('title')}`} />
        <PostHeader
          tag={tag}
          title={title}
          path={fields.path}
          original={original}
          date={date}
        />
        <VisibilitySensor style={{ marginTop: -90 }} onChange={this.onChange} />
        <div className="post-content">
          <div style={{ marginTop: -50 }} className="page-container">
            <div
              className="page-md"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <Share text={title} url={`${siteUrl}${fields.path}`} />
            <div className="appreciate">
              <div className="appreciate-text">「 别拦我，我要小额赞助 」</div>
              <div className="pay-btn" onClick={this.openModal}>
                赞赏
              </div>
            </div>

            <h2 className="comments-header">留言</h2>
            <div id="disqus_thread" />
          </div>

          <div
            style={
              fix
                ? {
                    position: 'fixed',
                    top: 45,
                  }
                : {
                    position: 'absolute',
                    top: 0,
                  }
            }
            className="post-content-table"
          >
            <a
              href="http://t.cn/REGhMEy"
              target="_blank"
              rel="noopener noreferrer"
              title="招聘"
            >
              <div className="post-ad">
                <img
                  className="ad-img"
                  src={require('../../images/ad.jpeg')}
                  alt="广告"
                />
                <div className="ad-text">还不快到碗里来 | 招聘</div>
              </div>
            </a>
            <div className="MarkNav-title">目录</div>
            <MarkNav
              className="article-menu"
              source={content}
              headingTopOffset={0}
            />
          </div>

          <dialog id="pay-modal" onClick={e => this.closeModal(e)}>
            <h3>枫上雾棋</h3>
            <div className="pay-qrcode">
              <img
                className="pay-qrcode-img"
                src={require('../../images/pay-qrcode.png')}
                alt="微信支付二维码"
              />
            </div>
            <div className="wechat-pay">
              <img
                className="wechat-pay-img"
                src={require('../../images/wechat-pay.png')}
                alt="微信支付"
              />
            </div>
          </dialog>
        </div>
      </div>
    );
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(PostTemplate);

export const pageQuery = graphql`
  query PathQuery($path: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      fields {
        path
      }
      internal {
        content
      }
      frontmatter {
        title
        tag
        date(formatString: "YYYY-MM-DD")
        original
      }
    }
  }
`;
