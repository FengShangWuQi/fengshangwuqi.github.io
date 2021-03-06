/*
 * Called when a new node is created.
 * Plugins wishing to extend or transform nodes created by other plugins should implement this API.
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode
 */

const { createFilePath } = require("gatsby-source-filesystem");

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case "Mdx": {
      const slug = createFilePath({ node, getNode });

      createNodeField({
        node,
        name: "slug",
        value: slug,
      });
      break;
    }
  }
};
