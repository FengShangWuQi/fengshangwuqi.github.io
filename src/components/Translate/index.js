import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import './style.css';

class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: this.props.i18n.language,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ language: nextProps.i18n.language });
  }

  handleChangeLanguage = lng => {
    this.props.i18n.changeLanguage(lng);
  };

  renderLanguageChoice({ code, label }) {
    return (
      <div
        key={code}
        style={
          code === this.state.language
            ? { background: 'rgba(255, 255, 255, 0.5)', color: '#101012' }
            : {}
        }
        className="language-btn"
        onClick={() => this.handleChangeLanguage(code)}
      >
        <div className="language-btn-text">{label}</div>
      </div>
    );
  }

  renderToggleChoice({ code, label }) {
    return (
      <div
        key={code}
        style={{
          border: '1px solid rgba(255, 255, 255, 0.5)',
          float: 'none',
          margin: '0 auto',
        }}
        className="language-btn"
        onClick={() => this.handleChangeLanguage(code)}
      >
        <div className="language-btn-text">{label}</div>
      </div>
    );
  }

  render() {
    const { toggle } = this.props;
    const { language } = this.state;
    const languages = [
      { code: 'zh', label: '中文' },
      { code: 'en', label: 'English'.toUpperCase() },
    ];
    const sideLanguage = {
      zh: languages[1],
      en: languages[0],
    };

    return toggle ? (
      <li className="header-sideNav-item translate-toggle-choice">
        {this.renderToggleChoice(sideLanguage[language])}
      </li>
    ) : (
      <li
        style={{
          border: '1px solid rgba(255, 255, 255, 0.5)',
        }}
        className="header-nav-item translate-choice"
      >
        {languages.map(language => this.renderLanguageChoice(language))}
      </li>
    );
  }
}

Translate.propTypes = {
  toggle: PropTypes.bool.isRequired,
  i18n: PropTypes.object.isRequired,
};

export default translate('translation')(Translate);
