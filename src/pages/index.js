import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import Layout from '../components/Layout';
import { BlogHeader } from '../components/Blog';
import { PostList } from '../components/Post';

class IndexPage extends React.Component {
	render() {
		const { data } = this.props;
		const { totalCount, edges: posts } = get(data, 'allMarkdownRemark');

		return (
			<Layout>
				<Helmet title="枫上雾棋的日志" />
				<BlogHeader totalCount={totalCount} />
				<PostList posts={posts} totalCount={totalCount} />
			</Layout>
		);
	}
}

IndexPage.propTypes = {
	data: PropTypes.object,
};

export default IndexPage;

export const pageQuery = graphql`
	{
		site {
			siteMetadata {
				title
			}
		}
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
`;
