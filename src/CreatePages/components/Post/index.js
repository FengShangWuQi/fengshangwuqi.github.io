const path = require('path');

exports.createPostPages = (createPage, edges) => {
  const postTemplate = path.resolve(`src/templates/post/index.js`);

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.path,
      component: postTemplate,
      context: {
        path: node.fields.path,
      },
    });
  });
};
