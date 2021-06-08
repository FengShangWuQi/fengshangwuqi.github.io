/*
 * Tell plugins to add pages.
 * This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
 */

const path = require("path");

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const templateDir = "src-app/storybook/templates";
  const indexTemplate = path.resolve(templateDir, "storybook-index.tsx");
  const groupTemplate = path.resolve(templateDir, "storybook-group.tsx");

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              group
              module
              name
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const storybooks = result.data.allMdx.edges;

  const storybookMap = storybooks.reduce((prev, { node }) => {
    const { group, module, name } = node.frontmatter;

    if (prev.has(group)) {
      const groupValue = prev.get(group);
      prev.set(group, {
        ...groupValue,
        [module]: groupValue[module] ? [...groupValue[module], name] : [name],
      });
    } else {
      prev.set(group, { [module]: [name] });
    }

    return prev;
  }, new Map());

  const groups = Array.from(storybookMap.keys());

  groups.map(group => {
    createPage({
      path: group,
      component: groupTemplate,
      context: {
        group,
        groups,
        modules: storybookMap.get(group),
      },
    });
  });

  createPage({
    path: "/",
    component: indexTemplate,
    context: {
      groups,
    },
  });

  createPage({
    path: "/404.html",
    component: path.resolve("pages", "404.ts"),
  });
};
