/*
 * Gatsby Config API
 *
 * https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const path = require("path");

/*
 * Configuration options
 *
 * siteMetadata (object)
 * plugins (array)
 * flags (object)
 * pathPrefix (string)
 * polyfill (boolean)
 * mapping (object)
 * proxy (object)
 * developMiddleware (function)
 */

// siteMetadata

exports.siteMetadata = {
  author: process.env.META_AUTHOR,
  title: process.env.META_TITLE,
  description: process.env.META_DECS,
  siteUrl: process.env.SITE_URL,
};

// plugins

const pnpm = "gatsby-plugin-pnpm";

const sources = process.env.SOURCES
  ? process.env.SOURCES.split(",").map(source => ({
      resolve: "gatsby-source-filesystem", // https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/?=gatsby-source-filesystem
      options: {
        path: path.resolve(process.cwd(), source),
        name: source,
      },
    }))
  : [];

const image = [
  "gatsby-plugin-image", // https://www.gatsbyjs.com/plugins/gatsby-plugin-image/?=gatsby-plugin-image
  "gatsby-plugin-sharp", // https://www.gatsbyjs.com/plugins/gatsby-transformer-sharp/?=%22gatsby-transformer-sharp
  // Needed for dynamic images
  "gatsby-transformer-sharp", // https://www.gatsbyjs.com/plugins/gatsby-plugin-sharp/?=gatsby-plugin-sharp
];

const mdx = {
  resolve: "gatsby-plugin-mdx", // https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/?=gatsby-plugin-mdx
  options: {
    extensions: [".mdx", ".md"],
    gatsbyRemarkPlugins: [
      {
        resolve: "gatsby-remark-images", // https://www.gatsbyjs.com/plugins/gatsby-remark-images/?=gatsby-remark-images
        options: {
          maxWidth: 600,
        },
      },
      {
        resolve: "gatsby-remark-external-links", // https://www.gatsbyjs.com/plugins/gatsby-remark-external-links/?=gatsby-remark-external-links
        options: {
          target: "_blank",
          rel: "noopener noreferrer",
        },
      },
      "gatsby-remark-emojis", // https://www.gatsbyjs.com/plugins/gatsby-remark-emojis/?=gatsby-remark-emojis
      "gatsby-remark-responsive-iframe", // https://www.gatsbyjs.com/plugins/gatsby-remark-responsive-iframe/?=gatsby-remark-responsive-iframe
      "gatsby-remark-copy-linked-files", // https://www.gatsbyjs.com/plugins/gatsby-remark-copy-linked-files/?=gatsby-remark-copy-linked-files
      "gatsby-remark-autolink-headers", // https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/?=gatsby-remark-autolink-headers
      "gatsby-remark-prismjs", // https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/?=gatsby-remark-prismjs
      "gatsby-remark-smartypants", // https://www.gatsbyjs.com/plugins/gatsby-remark-smartypants/?=gatsby-remark-smartypants
    ],
  },
};

const ts = "gatsby-plugin-typescript"; // https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/?=gatsby-plugin-typescript

const emotion = {
  resolve: "gatsby-plugin-emotion", // https://www.gatsbyjs.com/plugins/gatsby-plugin-emotion/?=gatsby-plugin-emotion
  options: {
    sourceMap: true,
    autoLabel: "dev-only",
    labelFormat: "[local]",
    cssPropOptimization: true,
  },
};

const helmet = "gatsby-plugin-react-helmet-async"; // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet-async/?=gatsby-plugin-react-helmet-async

const twitter = "gatsby-plugin-twitter"; // https://www.gatsbyjs.com/plugins/gatsby-plugin-twitter/?=gatsby-plugin-twitter

const sentry = {
  resolve: "@sentry/gatsby", // https://www.gatsbyjs.com/plugins/@sentry/gatsby/?=%40sentry%2Fgatsby
  options: {
    dsn: process.env.SENTRY_DSN,
    tracesSampleRate: 1,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
  },
};

const offline = "gatsby-plugin-offline"; // https://www.gatsbyjs.com/plugins/gatsby-plugin-offline/?=gatsby-plugin-offline

exports.plugins = [
  ...sources,
  ...image,
  pnpm,
  mdx,
  ts,
  emotion,
  helmet,
  twitter,
  sentry,
  offline,
];

// pathPrefix

exports.pathPrefix = process.env.PATH_PREFIX;
