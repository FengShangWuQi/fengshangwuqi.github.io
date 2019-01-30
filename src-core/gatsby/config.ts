// https://www.gatsbyjs.org/docs/gatsby-config/

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../../src-app", process.env.APP, ".env"),
});

exports.siteMetadata = {
  siteMetadata: {
    title: process.env.META_TITLE,
    author: process.env.META_AUTHOR,
    description: process.env.META_DECS,
    siteUrl: process.env.SITE_URL,
  },
};

exports.pathPrefix = {
  pathPrefix: process.env.PATH_PREFIX,
};

// Create File nodes from the file system
exports.sources = (process.env.SOURCES || "pages").split(" ").map(source => ({
  resolve: "gatsby-source-filesystem",
  options: {
    path: path.join(__dirname, "../../", source),
    name: source,
  },
}));

// typography
exports.typography = {
  resolve: "gatsby-plugin-typography",
  options: {
    pathToConfigModule: `src-app/${process.env.APP}/common/typography`,
  },
};

// Google Analytics
exports.analytics = {
  resolve: "gatsby-plugin-google-analytics",
  options: {
    trackingId: process.env.TRACKING_ID,
  },
};

// Parses Markdown files
exports.remarks = {
  resolve: "gatsby-transformer-remark",
  options: {
    plugins: [
      {
        resolve: "gatsby-remark-images",
        options: {
          maxWidth: 600,
        },
      },
      {
        resolve: "gatsby-remark-external-links",
        options: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      "gatsby-remark-emojis",
      "gatsby-remark-responsive-iframe",
      "gatsby-remark-copy-linked-files",
      "gatsby-remark-autolink-headers",
      "gatsby-remark-prismjs",
      "gatsby-remark-smartypants",
    ],
  },
};

// TypeScript
exports.ts = "gatsby-plugin-typescript";

// emotion
exports.emotion = "gatsby-plugin-emotion";

// Creates ImageSharp nodes from image types
exports.sharps = ["gatsby-transformer-sharp", "gatsby-plugin-sharp"];

// A document head manager
exports.helmet = "gatsby-plugin-react-helmet";

// Loads the Twitter JavaScript for embedding tweets
exports.twitter = "gatsby-plugin-twitter";

// Work offline and more resistant to bad network connections
exports.offline = "gatsby-plugin-offline";
