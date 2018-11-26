const path = require('path');
const { each } = require('lodash');

exports.createTagPages = (createPage, edges) => {
  const blogTag = path.resolve(`src/templates/Tag/index.js`);
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
      component: blogTag,
      context: {
        post,
        tag: tagName,
      },
    });
  });
};
