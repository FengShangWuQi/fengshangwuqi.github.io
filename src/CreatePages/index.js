const { createPostPages } = require('./Post');
const { createArchivePages } = require('./Archive');
const { createTagPages } = require('./Tag');

module.exports = {
  createPostPages,
  createArchivePages,
  createTagPages,
};
