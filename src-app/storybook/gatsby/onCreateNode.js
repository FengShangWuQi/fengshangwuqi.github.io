/*
 * Called when a new node is created.
 * Plugins wishing to extend or transform nodes created by other plugins should implement this API.
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateNode
 */

module.exports = ({ node, actions }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case "Mdx": {
      const { group, module, name } = node.frontmatter;
      const slug = `${group}?module=${module}&name=${name}`;

      createNodeField({
        node,
        name: "slug",
        value: slug,
      });
      break;
    }
  }
};
