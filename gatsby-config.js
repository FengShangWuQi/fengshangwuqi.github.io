const path = require("path");

const configFile = path.join(
  __dirname,
  "src-app",
  process.env.APP,
  "config.ts",
);
const configs = require(configFile);

module.exports = {
  ...configs,
};
