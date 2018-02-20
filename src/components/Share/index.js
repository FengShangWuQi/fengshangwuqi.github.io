import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import QRCode from 'qrcode';

import './style.css';

class Share extends Component {
  componentDidMount() {
    const { url } = this.props;
    const opts = {
      errorCorrectionLevel: 'H',
      type: 'image/jpeg',
      rendererOpts: {
        quality: 0.3,
      },
    };

    QRCode.toDataURL(url, opts, (err, url) => {
      if (err) throw err;

      document.getElementById('share-qrcode-img').src = url;
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      document.getElementById('share-qrcode-img').src = url;
    }
  }

  render() {
    const { text, url, t } = this.props;

    return (
      <div className="share">
        <span className="share-text">{t('share')}</span>
        <a
          className="share-link"
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${text}&url=${url}`
          )}
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img
            className="share-link-img"
            src={require('../../images/blueTwitter.png')}
          />
        </a>
        <div className="share-link share-wechat-link" title="WeChat">
          <img
            className="share-link-img"
            src={require('../../images/green-wechat.png')}
          />
          <div className="share-qrcode">
            <img
              id="share-qrcode-img"
              src={require('../../images/qrcode.jpeg')}
            />
          </div>
        </div>
      </div>
    );
  }
}

Share.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(Share);
