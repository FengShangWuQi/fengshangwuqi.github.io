const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  fmImagesToRelative(node);

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
