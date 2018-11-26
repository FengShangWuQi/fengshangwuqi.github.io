const fs = require('fs-extra');
const path = require('path');
const Promise = require('bluebird');
const { createFilePath } = require('gatsby-source-filesystem');
const {
	createPostPages,
	createArchivePages,
	createTagPages,
} = require('./src/CreatePages');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;

	return new Promise((resolve, reject) => {
		resolve(
			graphql(`
				{
					allMarkdownRemark(
						limit: 1000
						sort: { fields: [frontmatter___date], order: DESC }
					) {
						totalCount
						edges {
							node {
								excerpt
								fields {
									slug
								}
								frontmatter {
									title
									tag
									date(formatString: "YYYY-MM-DD")
									original
								}
							}
						}
					}
				}
			`).then(result => {
				if (result.errors) {
					console.error(result.errors);
					reject(result.errors);
				}

				const { totalCount, edges: posts } = result.data.allMarkdownRemark;

				createPostPages(createPage, posts);
				createArchivePages(createPage, posts, totalCount);
				createTagPages(createPage, posts);
			})
		);
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });

		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
