import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Header from '../../components/Header';
import Share from '../../components/Share';

import './style.css';

const PostTemplate = ({ data, t }) => {
  const { siteUrl } = get(data, 'site.siteMetadata');
  const { html, fields, frontmatter } = get(data, 'markdownRemark');
  const { title, tag, date, original } = frontmatter;
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
    <div className="post">
      <Helmet title={`${title} - ${t('title')}`} />
      <Header
        style={{
          backgroundImage: `url(${require(`../../pages${
            fields.path
          }header.png`)})`,
        }}
        center={center}
        bottom={bottom}
      />
      <div style={{ marginTop: -50 }} className="page-container">
        <div className="page-md" dangerouslySetInnerHTML={{ __html: html }} />
        <Share text={title} url={`${siteUrl}${fields.path}`} />
      </div>
    </div>
  );
};

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
      frontmatter {
        title
        tag
        date(formatString: "YYYY-MM-DD")
        original
      }
    }
  }
`;
