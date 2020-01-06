const { resolve } = require("path");

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const templatePath = "src-app/blog/templates/";
  const latestTemplate = resolve(`${templatePath}/blog-latest.tsx`);
  const archiveTemplate = resolve(`${templatePath}/blog-archive.tsx`);
  const postTemplate = resolve(`${templatePath}/blog-post.tsx`);

  const result = await graphql(`
    query {
      allMdx {
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

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  const { edges: posts, totalCount } = result.data.allMdx;

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

  createPage({
    path: "/archive",
    component: archiveTemplate,
  });

  const size = Number(process.env.SIZE);
  const totalPage = Math.ceil(totalCount / size);

  Array.from({ length: totalPage }, (_, i) => i + 1).forEach(num => {
    createPage({
      path: num === 1 ? "/" : `/latest/${num}`,
      component: latestTemplate,
      context: {
        total: totalCount,
        size,
        offset: (num - 1) * size,
      },
    });
  });
};
