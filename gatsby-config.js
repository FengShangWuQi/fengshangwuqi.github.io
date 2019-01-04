module.exports = {
  siteMetadata: {
    title: "枫上雾棋的日志",
    author: "枫上雾棋",
    description: "Stay hungry, stay foolish.",
    siteUrl: "https://fengshangwuqi.github.io",
  },
  pathPrefix: "blog",
  plugins: [
    // TypeScript
    `gatsby-plugin-typescript`,

    // emotion
    `gatsby-plugin-emotion`,

    // typography
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src-app/blog/utils/typography`,
      },
    },

    // Create File nodes from the file system
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },

    // Parses Markdown files
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
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
          `gatsby-remark-emojis`,
          `gatsby-remark-responsive-iframe`,
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-autolink-headers",
          "gatsby-remark-prismjs",
          "gatsby-remark-smartypants",
        ],
      },
    },

    // Creates ImageSharp nodes from image types
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // A document head manager
    `gatsby-plugin-react-helmet`,

    // Add Google Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114534441-1",
      },
    },

    // Work offline and more resistant to bad network connections
    `gatsby-plugin-offline`,
  ],
};
