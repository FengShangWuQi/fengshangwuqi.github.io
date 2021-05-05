/*
 * lets you respond to Gatsby-specific events within the browser, and wrap your page components in additional global components.
 * The Gatsby Browser API gives you many options for interacting with the client-side of Gatsby.
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

const figlet = require("figlet");

figlet.parseFont(
  "Standard",
  require("figlet/importable-fonts/Standard.js").default,
);

exports.onInitialClientRender = () => {
  figlet.text(process.env.__APP__, "Standard", function (_, data) {
    console.log(data, "\n", `by ${process.env.__AUTHOR__ || ""}`);
  });
};
