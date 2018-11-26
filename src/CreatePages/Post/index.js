const path = require('path');
const { each } = require('lodash');

exports.createPostPages = (createPage, posts) => {
  const blogPost = path.resolve(`src/templates/Post/index.js`);

  each(posts, (post, index) => {
    const {
      node: {
        fields: { slug },
      },
    } = post;

    createPage({
      path: slug,
      component: blogPost,
      context: {
        slug,
      },
    });
  });
};
