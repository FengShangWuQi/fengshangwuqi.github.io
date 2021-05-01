/*
 * This file is where Gatsby expects to find any usage of the Gatsby node APIs (if any).
 * These allow customization/extension of default Gatsby settings affecting pieces of the site build process
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");

const targetDir = path.resolve(
  __dirname,
  "src-app",
  process.env.APP || "blog",
  "gatsby",
);

exports.createPages = require(path.resolve(targetDir, "createPages"));
exports.onCreateNode = require(path.resolve(targetDir, "onCreateNode"));

/*
 * Let plugins extend/mutate the site’s webpack configuration
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#onCreateWebpackConfig
 */

const processEnv = () => {
  const gatsbyVarObject = {
    __APP__: process.env.APP,
    __AUTHOR__: process.env.META_AUTHOR,
  };

  return Object.keys(gatsbyVarObject).reduce(
    (acc, key) => {
      acc[`process.env.${key}`] = JSON.stringify(gatsbyVarObject[key]);
      return acc;
    },
    {
      "process.env": `({})`,
    },
  );
};

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname), "node_modules"],
    },
    plugins: [
      /*
       * Defining Environment Variables in Client-side JavaScript
       */
      plugins.define({
        ...processEnv(),
      }),
    ],
  });
};
