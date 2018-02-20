const path = require('path');

exports.createTagPages = (createPage, edges) => {
  const tagTemplate = path.resolve(`src/templates/tag/index.js`);
  const posts = {};

  edges.forEach(post => {
    const { node } = post;
    if (node.frontmatter.tag) {
      node.frontmatter.tag.split(',').forEach(t => {
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
      component: tagTemplate,
      context: {
        posts,
        post,
        tag: tagName,
      },
    });
  });
};
