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
  // Defining Environment Variables in Client-side JavaScript
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

const mergeResolve = config => {
  // Absolute imports
  config.resolve.modules.push(path.resolve(__dirname));
};

const mergePlugins = (config, plugins) => {
  config.plugins.push(
    plugins.define({
      ...processEnv(),
    }),
  );
};

exports.onCreateWebpackConfig = ({ actions, plugins, getConfig }) => {
  const config = getConfig();

  mergeResolve(config);
  mergePlugins(config, plugins);

  actions.replaceWebpackConfig(config);
};
