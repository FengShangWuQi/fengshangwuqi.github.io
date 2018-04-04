const path = require('path');

exports.createPostPages = (createPage, edges) => {
  const postTemplate = path.resolve(`src/templates/post/index.js`);

  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: postTemplate,
      context: {
        slug: node.fields.slug,
      },
    });
  });
};
