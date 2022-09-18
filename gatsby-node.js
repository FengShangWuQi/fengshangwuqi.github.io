/*
 * This file is where Gatsby expects to find any usage of the Gatsby node APIs (if any).
 * These allow customization/extension of default Gatsby settings affecting pieces of the site build process
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");

const DEFAULT_APP = "blog";

const targetDir = path.resolve(
  __dirname,
  "src-app",
  process.env.APP || DEFAULT_APP,
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
 *
 * webpack reducer
 * https://github.com/gatsbyjs/gatsby/blob/54d4721462b9303fed723fdcb15ac5d72e103778/packages/gatsby/src/redux/reducers/webpack.ts
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

const mergePlugins = (actions, plugins) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        ...processEnv(),
      }),
    ],
  });
};

const mergeResolve = actions => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "src-api": path.resolve(__dirname, "src-api"),
        "src-app": path.resolve(__dirname, "src-app"),
        "src-client": path.resolve(__dirname, "src-client"),
        "src-components": path.resolve(__dirname, "src-components"),
        "src-core": path.resolve(__dirname, "src-core"),
        static: path.resolve(__dirname, "static"),
        utils: path.resolve(__dirname, "utils"),
      },
    },
  });
};

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  mergePlugins(actions, plugins);
  mergeResolve(actions);
};
