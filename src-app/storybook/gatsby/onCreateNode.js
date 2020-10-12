module.exports = ({ node, actions }) => {
  const { createNodeField } = actions;

  switch (node.internal.type) {
    case "Mdx": {
      const { group, module, name } = node.frontmatter;

      createNodeField({
        name: "slug",
        node,
        value: `${group}?module=${module}&name=${name}`,
      });
      break;
    }
  }
};
