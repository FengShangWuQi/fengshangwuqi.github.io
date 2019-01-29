const { resolve } = require("path");

// Add custom webpack config
module.exports = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        resolve(__dirname, "../../"),
        resolve(__dirname, "../../node_modules"),
      ],
    },
  });
};
