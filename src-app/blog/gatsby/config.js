const gatsbyConfig = require("../../../src-core/gatsby");

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
                    original
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

gatsbyConfig.plugins.push(feed);

module.exports = gatsbyConfig;
