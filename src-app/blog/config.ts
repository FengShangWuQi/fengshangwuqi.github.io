const Path = require("path");
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
  offline,
} = require(Path.join(__dirname, "../../src-core/gatsby/config.ts"));

const plugins = [
  ts,
  emotion,
  typography,
  ...sources,
  remarks,
  ...sharps,
  helmet,
  analytics,
  offline,
];

module.exports = {
  ...siteMetadata,
  ...pathPrefix,
  plugins,
};
