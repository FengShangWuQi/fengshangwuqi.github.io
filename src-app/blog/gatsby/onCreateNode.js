const { createFilePath } = require("gatsby-source-filesystem");

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case "Mdx": {
      const value = createFilePath({ node, getNode });

      createNodeField({
        name: "slug",
        node,
        value,
      });
      break;
    }
  }
};
