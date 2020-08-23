// https://www.gatsbyjs.org/docs/gatsby-config/

const path = require("path");

exports.siteMetadata = {
  author: process.env.META_AUTHOR,
  title: process.env.META_TITLE,
  description: process.env.META_DECS,
  siteUrl: process.env.SITE_URL,
};

exports.pathPrefix = process.env.PATH_PREFIX;

exports.sources = process.env.SOURCES
  ? process.env.SOURCES.split(",").map(source => ({
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(process.cwd(), source),
        name: source,
      },
    }))
  : [];

exports.mdx = {
  resolve: `gatsby-plugin-mdx`,
  options: {
    extensions: [`.mdx`, `.md`],
    gatsbyRemarkPlugins: [
      "gatsby-remark-relative-images",
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

exports.catchLinks = "gatsby-plugin-catch-links";

exports.sharps = ["gatsby-transformer-sharp", "gatsby-plugin-sharp"];

exports.ts = "gatsby-plugin-typescript";

exports.emotion = "gatsby-plugin-emotion";

exports.helmet = "gatsby-plugin-react-helmet";

exports.twitter = "gatsby-plugin-twitter";

exports.analytics = {
  resolve: "gatsby-plugin-google-analytics",
  options: {
    trackingId: process.env.TRACKING_ID,
  },
};

exports.netlifyCMS = process.env.CMS_PATH
  ? {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        manualInit: true,
        modulePath: path.join(process.cwd(), process.env.CMS_PATH),
      },
    }
  : {};

exports.offline = "gatsby-plugin-offline";
