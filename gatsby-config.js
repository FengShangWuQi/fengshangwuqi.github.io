const { join } = require("path");
const configFile = join(__dirname, "src-app", process.env.APP, "config.ts");

const configs = require(configFile);

module.exports = {
  ...configs,
};
