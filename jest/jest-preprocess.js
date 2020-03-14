const babelOpts = {
  babelrc: false,
  presets: ["./packages/babel-preset"],
};

module.exports = require("babel-jest").createTransformer(babelOpts);
