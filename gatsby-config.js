/*
 * This is the main configuration file for a Gatsby site.
 * This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc.
 * Check out https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/ for more detail.
 */

const path = require("path");

const targetDir = path.join(
  __dirname,
  "src-app",
  process.env.APP || "blog",
  "gatsby",
);
const gatsbyConfig = require(path.join(targetDir, "config"));

module.exports = {
  //configuration object
  ...gatsbyConfig,
};
