const { join } = require("path");
const gatsbyPath = join(__dirname, "src-app", process.env.APP, "gatsby");

const configs = require(`${gatsbyPath}/config`);

module.exports = {
  ...configs,
};
