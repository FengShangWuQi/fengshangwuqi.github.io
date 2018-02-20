import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { translate } from 'react-i18next';

import i18n from '../i18n';
import Footer from '../components/Footer';

import 'normalize.css';
import 'prismjs/themes/prism.css';
import 'katex/dist/katex.min.css';
import './index.css';

translate.setI18n(i18n);

const IndexLayouts = ({ children }) => {
  return (
    <div>
      <header
        style={{
          position: 'absolute',
          height: 480,
          width: '100%',
          background: '#101012',
        }}
      />
      <div id="particles" />
      {children()}
      <Footer />
    </div>
  );
};

IndexLayouts.propTypes = {
  children: PropTypes.func,
};

export default IndexLayouts;
