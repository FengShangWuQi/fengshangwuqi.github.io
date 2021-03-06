const gatsbyConfig = require("../../../src-core/gatsby");

const reactSvg = {
  resolve: "gatsby-plugin-react-svg", // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/?=gatsby-plugin-react-svg
  options: {
    rule: {
      omitKeys: ["pId"],
    },
  },
};

gatsbyConfig.plugins.push(reactSvg);

module.exports = gatsbyConfig;
