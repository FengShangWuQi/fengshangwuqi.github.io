const { join } = require("path");
const gatsbyPath = join(__dirname, "../../../src-core/gatsby");

const {
  siteMetadata,
  pathPrefix,
  sources,
  mdx,
  analytics,
  ts,
  emotion,
  sharps,
  helmet,
  twitter,
  offline,
  svgr,
} = require(`${gatsbyPath}/config`);

const plugins = [
  ts,
  emotion,
  ...sources,
  ...sharps,
  mdx,
  twitter,
  helmet,
  analytics,
  offline,
  svgr,
];

module.exports = {
  ...siteMetadata,
  ...pathPrefix,
  plugins,
};
