const { join } = require("path");
const gatsbyPath = join(__dirname, "../../../src-core/gatsby");

const {
  siteMetadata,
  pathPrefix,
  sources,
  analytics,
  mdx,
  ts,
  emotion,
  sharps,
  helmet,
  twitter,
  offline,
  feed,
  netlifyCMS,
} = require(`${gatsbyPath}/config.js`);

const plugins = [
  ts,
  emotion,
  ...sources,
  ...sharps,
  mdx,
  netlifyCMS,
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
