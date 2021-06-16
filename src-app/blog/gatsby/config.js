const gatsbyConfig = require("../../../src-core/gatsby");

const algolia = {
  resolve: `gatsby-plugin-algolia`, // https://www.gatsbyjs.com/docs/adding-search-with-algolia/
  options: {
    appId: process.env.GATSBY_ALGOLIA_APP_ID || "",
    apiKey: process.env.ALGOLIA_ADMIN_KEY || "",
    queries: require("../search/algolia-queries"),
  },
};

const feed = {
  resolve: "gatsby-plugin-feed", // https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/?=gatsby-plugin-feed
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
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map(edge => {
            return Object.assign({}, edge.node.frontmatter, {
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
              guid: `${site.siteMetadata.siteUrl}${edge.node.fields.slug}`,
              custom_elements: [{ "content:encoded": edge.node.body }],
            });
          });
        },
        query: `
          {
            allMdx(
              sort: { fields: [frontmatter___date], order: DESC }
            ) {
              edges {
                node {
                  excerpt(pruneLength: 95)
                  fields { slug }
                  body
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
  },
};

gatsbyConfig.plugins.push(algolia, feed);

module.exports = gatsbyConfig;
