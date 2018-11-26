const path = require('path');
const { each } = require('lodash');

exports.createArchivePages = (createPage, posts, totalCount) => {
  const blogArchive = path.resolve(`src/templates/Archive/index.js`);
  const archives = {};

  each(posts, ({ node }) => {
    const year = node.frontmatter.date.slice(0, 4);
    if (!archives[`year${year}`]) {
      archives[`year${year}`] = [];
    }
    archives[`year${year}`].push(node);
  });

  createPage({
    path: 'archives',
    component: blogArchive,
    context: {
      archives,
      totalCount,
    },
  });
};
