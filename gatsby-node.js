const { join } = require("path");
const gatsbyPath = join(__dirname, "src-app", process.env.APP, "gatsby");

exports.createPages = require(`${gatsbyPath}/createPages`);
exports.onCreateWebpackConfig = require(`${gatsbyPath}/onCreateWebpackConfig`);
exports.onCreateNode = require(`${gatsbyPath}/onCreateNode`);
