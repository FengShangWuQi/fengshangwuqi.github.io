const { join } = require("path");
const gatsbyPath = join(__dirname, "../../../src-core/gatsby");

const {
  siteMetadata,
  pathPrefix,
  sources,
  mdx,
  typography,
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
  typography,
  ...sources,
  mdx,
  ...sharps,
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
