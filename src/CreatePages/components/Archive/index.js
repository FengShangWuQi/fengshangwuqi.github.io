const path = require('path');

exports.createArchivePages = (createPage, edges, totalCount) => {
  const archiveTemplate = path.resolve(`src/templates/archive/index.js`);
  const archives = {};

  edges.forEach(({ node }) => {
    const year = node.frontmatter.date.slice(0, 4);
    if (!archives[`year${year}`]) {
      archives[`year${year}`] = [];
    }
    archives[`year${year}`].push(node);
  });

  createPage({
    path: 'archives',
    component: archiveTemplate,
    context: {
      archives,
      totalCount,
    },
  });
};
