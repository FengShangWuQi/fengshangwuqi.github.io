import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

import Blog from '../Blog';

import './style.css';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 1, PAGE_SIZE: 5 };
  }

  onChange = current => {
    window.scroll({ top: 0 });
    this.setState({
      current,
    });
  };

  render() {
    const { posts, totalCount, t } = this.props;
    const { current, PAGE_SIZE } = this.state;

    return (
      <div className="page-container">
        {posts
          .slice(PAGE_SIZE * (current - 1), current * PAGE_SIZE)
          .map(({ node }) => (
            <Blog
              key={node.fields.path}
              path={node.fields.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              tag={node.frontmatter.tag}
              intro={node.excerpt}
              original={node.frontmatter.original}
            />
          ))}
        <div className="posts-pagination">
          <div
            style={{
              marginRight: 30,
              display: current === 1 ? 'none' : 'block',
            }}
            className="pagination-btn"
            onClick={() => this.onChange(current - 1)}
          >
            {t('prev')}
          </div>
          <div
            style={{
              display:
                current === Math.floor(totalCount / PAGE_SIZE) + 1
                  ? 'none'
                  : 'block',
            }}
            className="pagination-btn"
            onClick={() => this.onChange(current + 1)}
          >
            {t('next')}
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate('translation')(Posts);
