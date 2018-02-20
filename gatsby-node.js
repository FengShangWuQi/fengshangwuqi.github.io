const fs = require('fs-extra');
const path = require('path');
const { merge } = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const {
  createTagPages,
  createPostPages,
  createArchivePages,
} = require('./src/CreatePages');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        totalCount
        edges {
          node {
            excerpt
            fields {
              path
            }
            frontmatter {
              title
              tag
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }
    const { totalCount, edges } = result.data.allMarkdownRemark;

    createTagPages(createPage, edges);
    createPostPages(createPage, edges);
    createArchivePages(createPage, edges, totalCount);
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'path',
      node,
      value,
    });
  }
};

exports.onPostBuild = () => {
  fs.copySync(
    path.join(__dirname, '/src/locales'),
    path.join(__dirname, '/public/locales')
  );
};
