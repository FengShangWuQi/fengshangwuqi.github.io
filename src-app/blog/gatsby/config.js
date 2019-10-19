const { join } = require("path");
const gatsbyPath = join(__dirname, "../../../src-core/gatsby");

const {
  siteMetadata,
  pathPrefix,
  sources,
  typography,
  analytics,
  mdx,
  ts,
  emotion,
  sharps,
  helmet,
  twitter,
  offline,
  feed,
} = require(`${gatsbyPath}/config.js`);

const plugins = [
  ts,
  emotion,
  typography,
  ...sources,
  mdx,
  ...sharps,
  twitter,
  helmet,
  feed,
  analytics,
  offline,
];

module.exports = {
  ...siteMetadata,
  ...pathPrefix,
  plugins,
};
