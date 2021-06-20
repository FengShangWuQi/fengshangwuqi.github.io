/*
 * This is the main configuration file for a Gatsby site.
 * This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc.
 * Check out config docs for more detail.
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const path = require("path");

const targetDir = path.resolve(
  __dirname,
  "src-app",
  process.env.APP || "blog",
  "gatsby",
);
const gatsbyConfig = require(path.resolve(targetDir, "config"));

module.exports = {
  //configuration object
  ...gatsbyConfig,

  // https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/flags.ts
  flags: {
    FAST_DEV: true,
    DEV_SSR: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    PARALLEL_SOURCING: true,
    LMDB_STORE: true,
  },
};
