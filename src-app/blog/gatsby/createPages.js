/*
 * Tell plugins to add pages.
 * This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
 */

const path = require("path");

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateDir = "src-app/blog/templates";
  const latestTemplate = path.resolve(templateDir, "blog-latest.tsx");
  const archiveTemplate = path.resolve(templateDir, "blog-archive.tsx");
  const postTemplate = path.resolve(templateDir, "blog-post.tsx");

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
    throw result.errors;
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

  createPage({
    path: "/404.html",
    component: path.resolve(templateDir, "404.tsx"),
  });
};
