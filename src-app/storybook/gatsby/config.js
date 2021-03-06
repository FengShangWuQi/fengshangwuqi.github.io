const {
  siteMetadata,
  pathPrefix,
  sources,
  mdx,
  catchLinks,
  sharps,
  helmet,
  ts,
  emotion,
  twitter,
  analytics,
  reactSvg,
  offline,
} = require("../../../src-core/gatsby");

module.exports = {
  siteMetadata,
  pathPrefix,
  plugins: [
    ...sources,
    ...sharps,
    mdx,
    catchLinks,
    helmet,
    ts,
    emotion,
    twitter,
    analytics,
    reactSvg,
    offline,
  ],
};
