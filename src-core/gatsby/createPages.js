const { resolve } = require("path");

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templatePath = "src-app/blog/templates/";
  const latestTemplate = resolve(`${templatePath}/blog-latest.tsx`);
  const archiveTemplate = resolve(`${templatePath}/blog-archive.tsx`);
  const postTemplate = resolve(`${templatePath}/blog-post.tsx`);

  const allMarkdown = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors);

    throw Error(allMarkdown.errors);
  }

  // Create Latest(Index) Page
  createPage({
    path: "/",
    component: latestTemplate,
  });

  // Create Archive Page
  createPage({
    path: "/archive",
    component: archiveTemplate,
  });

  // Create blog posts pages
  const posts = allMarkdown.data.allMarkdownRemark.edges;
  posts.forEach(post => {
    const {
      node: {
        fields: { slug },
      },
    } = post;

    createPage({
      path: slug,
      component: postTemplate,
      context: {
        slug,
      },
    });
  });
};
