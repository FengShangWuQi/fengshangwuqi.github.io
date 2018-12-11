module.exports = {
  siteMetadata: {
    title: "枫上雾棋的日志",
    author: "枫上雾棋",
    description: "from Front-End to Full stack",
    siteUrl: "https://fengshangwuqi.github.io",
  },
  pathPrefix: "blog",
  plugins: [
    // TypeScript
    `gatsby-plugin-typescript`,

    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 660,
              wrapperStyle: `margin: 30px 0;`,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener noreferrer",
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-emoji`,
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
          "gatsby-remark-autolink-headers",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-114534441-1",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
				{
				  site {
					siteMetadata {
					  title
					  author
					  description
					  siteUrl
					  site_url: siteUrl
					}
				  }
				}
			  `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [
                    {
                      "content:encoded": edge.node.html,
                    },
                  ],
                });
              });
            },
            query: `
					{
					  allMarkdownRemark(
						limit: 1000,
						sort: { order: DESC, fields: [frontmatter___date] },
					  ) {
						edges {
						  node {
							excerpt
							html
							fields { slug }
							frontmatter {
							  title
							  tag
							  date(formatString: "YYYY-MM-DD")
							}
						  }
						}
					  }
					}
				  `,
            output: "/rss.xml",
          },
        ],
      },
    },
  ],
};
