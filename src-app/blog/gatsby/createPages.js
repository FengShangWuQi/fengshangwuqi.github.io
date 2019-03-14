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
        totalCount
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

  const { edges: posts, totalCount } = allMarkdown.data.allMarkdownRemark;

  // Create blog posts pages
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

  // Create Latest(Index) Page
  createPage({
    path: "/",
    component: latestTemplate,
  });

  // Create Archive Page
  const size = Number(process.env.ARCHIVE_SIZE);
  const totalPage = Math.ceil(totalCount / size);
  Array.from({ length: totalPage }, (_, i) => i + 1).forEach(num => {
    createPage({
      path: num === 1 ? "/archive" : `/archive/${num}`,
      component: archiveTemplate,
      context: {
        total: totalCount,
        size,
        offset: (num - 1) * size,
      },
    });
  });
};
