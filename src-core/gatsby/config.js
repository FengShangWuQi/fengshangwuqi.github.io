// https://www.gatsbyjs.org/docs/gatsby-config/

const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "../../src-app", process.env.APP, ".env"),
});

exports.siteMetadata = {
  siteMetadata: {
    author: "枫上雾棋",
    title: process.env.META_TITLE,
    description: process.env.META_DECS,
    siteUrl: process.env.SITE_URL,
    social: {
      Twitter: "@fengshangwuqi",
      GitHub: "FengShangWuQi",
    },
    contact: {
      Email: "fengshangwuqi@gmail.com",
    },
    repository: "fengshangwuqi.github.io",
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
    pathToConfigModule: "src-core/style/typography",
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

// Transform SVGs into React components
exports.svgr = {
  resolve: "gatsby-plugin-svgr",
  options: {
    icon: true,
    replaceAttrValues: {
      "#555": "currentColor",
    },
    svgoConfig: {
      cleanupAttrs: true,
      cleanupIDs: true,
      cleanupEnableBackground: true,
      inlineStyles: true,
      collapseGroups: true,
      convertStyleToAttrs: true,
      convertColors: true,
      convertShapeToPath: true,
      removeDoctype: true,
      removeXMLProcInst: true,
      removeComments: true,
      removeMetadata: true,
      removeTitle: true,
      removeDesc: true,
      removeUselessDefs: true,
      removeEditorsNSData: true,
      removeEmptyAttrs: true,
      removeHiddenElems: true,
      removeEmptyText: true,
      removeEmptyContainers: true,
      removeViewBox: true,
      removeUnknownsAndDefaults: true,
      removeUselessStrokeAndFill: true,
      removeUnusedNS: true,
    },
  },
};

// Work offline and more resistant to bad network connections
exports.offline = "gatsby-plugin-offline";

// Create an RSS feed (or multiple feeds)
exports.feed = {
  resolve: "gatsby-plugin-feed",
  options: {
    query: `
        {
          site {
            siteMetadata {
              title
              author
              description
              siteUrl
            }
          }
        }
      `,
  },
  feeds: [
    {
      serialize: ({ query: { site, allMarkdownRemark } }) => {
        return allMarkdownRemark.edges.map(edge => {
          return Object.assign({}, edge.node.frontmatter, {
            description: edge.node.excerpt,
            date: edge.node.frontmatter.date,
            url: site.siteMetadata.siteUrl + edge.node.fields.slug,
            guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
            custom_elements: [{ "content:encoded": edge.node.html }],
          });
        });
      },
      query: `
        {
          allMarkdownRemark(
            limit: 1000,
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                excerpt(pruneLength: 140)
                fields { slug }
                html
                frontmatter {
                  title
                  date(formatString: "YYYY-MM-DD")
                  tags
                }
              }
            }
          }
        }
      `,
      output: "/rss.xml",
      title: "fengshangwuqi's blog RSS Feed",
    },
  ],
};
