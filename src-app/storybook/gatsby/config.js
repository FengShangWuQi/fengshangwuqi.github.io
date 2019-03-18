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
} = require(`${gatsbyPath}/config`);

const plugins = [ts, emotion, typography, twitter, helmet, analytics, offline];

module.exports = {
  ...siteMetadata,
  ...pathPrefix,
  plugins,
};
