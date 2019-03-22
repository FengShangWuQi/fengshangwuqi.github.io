const { resolve } = require("path");

module.exports = async ({ actions }) => {
  const { createPage } = actions;

  const indexTemplate = resolve(`src-app/storybook/templates/index.tsx`);

  // Create Index Page
  createPage({
    path: "/",
    component: indexTemplate,
  });
};
