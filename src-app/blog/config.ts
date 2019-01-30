const { join } = require("path");
const gatsbyPath = join(__dirname, "../../src-core/gatsby");

const {
  siteMetadata,
  pathPrefix,
  sources,
  typography,
  analytics,
  remarks,
  ts,
  emotion,
  sharps,
  helmet,
  twitter,
  offline,
} = require(`${gatsbyPath}/config.ts`);

const plugins = [
  ts,
  emotion,
  typography,
  ...sources,
  remarks,
  ...sharps,
  twitter,
  helmet,
  analytics,
  offline,
];

module.exports = {
  ...siteMetadata,
  ...pathPrefix,
  plugins,
};
