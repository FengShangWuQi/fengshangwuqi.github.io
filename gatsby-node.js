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

/**
 * Adding a Custom webpack Config
 * https://www.gatsbyjs.com/docs/how-to/custom-configuration/add-custom-webpack-config/
 *
 * webpack.config.js
 * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/webpack.config.js
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

const mergePlugins = (config, plugins) => {
  const configPlugins = [
    plugins.define({
      ...processEnv(),
    }),
  ];
  config.plugins.push(...configPlugins);
};

const mergeResolve = config => {
  config.resolve.modules.push(path.resolve(__dirname));
};

exports.onCreateWebpackConfig = ({ actions, plugins, getConfig }) => {
  const config = getConfig();

  mergePlugins(config, plugins);
  mergeResolve(config);

  actions.replaceWebpackConfig(config);
};
