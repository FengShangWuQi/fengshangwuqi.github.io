const { createFilePath } = require("gatsby-source-filesystem");

// Add custom url pathname for blog posts
module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    // Ensures we are processing only markdown files
    case "MarkdownRemark": {
      const value = createFilePath({ node, getNode });

      // Creates new query'able field with name of 'slug'
      createNodeField({
        name: "slug",
        node,
        value,
      });
      break;
    }
  }
};
