import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PostItem from './components/PostItem';

import './style.css';

class PostList extends Component {
	state = { current: 1, PAGE_SIZE: 5 };

	onChange = current => {
		window.scroll({ top: 0 });
		this.setState({
			current,
		});
	};

	render() {
		const { posts, totalCount } = this.props;
		const { current, PAGE_SIZE } = this.state;

		return (
			<div className="page-container">
				{posts
					.slice(PAGE_SIZE * (current - 1), current * PAGE_SIZE)
					.map(({ node }) => (
						<PostItem
							key={node.fields.slug}
							title={node.frontmatter.title}
							original={node.frontmatter.original}
							path={node.fields.slug}
							tag={node.frontmatter.tag}
							date={node.frontmatter.date}
							intro={node.excerpt}
						/>
					))}
				<div className="posts-pagination">
					<div
						style={{
							marginRight: 30,
							display: current === 1 ? 'none' : 'block',
						}}
						className="posts-pagination-btn"
						onClick={() => this.onChange(current - 1)}>
						上一页
					</div>
					<div
						style={{
							display:
								current === Math.floor(totalCount / PAGE_SIZE) + 1
									? 'none'
									: 'block',
						}}
						className="posts-pagination-btn"
						onClick={() => this.onChange(current + 1)}>
						下一页
					</div>
				</div>
			</div>
		);
	}
}

PostList.propTypes = {
	posts: PropTypes.array.isRequired,
	totalCount: PropTypes.number.isRequired,
};

export default PostList;
