const path = require('path');
const Promise = require('bluebird');
const { each } = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(`
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
                  slug
                }
                frontmatter {
                  title
                  tag
                  date(formatString: "YYYY-MM-DD")
                  original
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.error(result.errors);
          reject(result.errors);
        }

        createPage({
          path: `/`,
          component: path.resolve('posts/index.tsx'),
        });

        const { totalCount, edges } = result.data.allMarkdownRemark;

        // 创建 posts
        each(edges, post => {
          const {
            node: {
              fields: { slug },
            },
          } = post;

          createPage({
            path: slug,
            component: path.resolve('src-app/blog/templates/blog-post.tsx'),
            context: {
              slug,
            },
          });
        });

        // 创建 archives
        const archives = {};
        each(edges, ({ node }) => {
          const year = node.frontmatter.date.slice(0, 4);
          if (!archives[`year${year}`]) {
            archives[`year${year}`] = [];
          }
          archives[`year${year}`].push(node);
        });

        createPage({
          path: 'archives',
          component: path.resolve('src-app/blog/templates/blog-archive.tsx'),
          context: {
            archives,
            totalCount,
          },
        });

        // 创建 tags
        const posts = {};

        each(edges, post => {
          const { tag } = post.node.frontmatter;
          if (tag) {
            tag.split(',').forEach(t => {
              if (!posts[t]) {
                posts[t] = [];
              }
              posts[t].push(post);
            });
          }
        });

        Object.keys(posts).forEach(tagName => {
          const post = posts[tagName];
          createPage({
            path: tagName,
            component: path.resolve('src-app/blog/templates/blog-tag.tsx'),
            context: {
              post,
              tag: tagName,
            },
          });
        });
      })
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig();

  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      modules: [...config.resolve.modules, '.'],
    },
  };
  actions.replaceWebpackConfig(newConfig);
};
