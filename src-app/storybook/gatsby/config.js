const { join } = require("path");
const gatsbyPath = join(__dirname, "../../../src-core/gatsby");

const {
  siteMetadata,
  pathPrefix,
  typography,
  analytics,
  ts,
  emotion,
  helmet,
  twitter,
  offline,
  svgr,
} = require(`${gatsbyPath}/config`);

const plugins = [
  ts,
  emotion,
  typography,
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
