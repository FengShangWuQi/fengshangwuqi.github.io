import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/Header';

const NotFound = props => {
  const { t } = props;
  const left = <h1>{t('NotFound')}</h1>;
  const bottom = (
    <div className="header-back">
      <Link to="/">>> {t('title')}</Link>
    </div>
  );

  return (
    <div className="not-found">
      <Helmet title="404" />
      <Header
        style={{
          backgroundImage: `url(${require('../images/404.png')})`,
        }}
        left={left}
        bottom={bottom}
      />
      <div className="page-container">
        <img
          className="not-found-img"
          src={require('../images/404-content.png')}
          alt="404"
        />
      </div>
    </div>
  );
};

NotFound.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate('translation')(NotFound);
