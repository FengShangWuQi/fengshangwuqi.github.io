import { React, Component } from "src-core/react";

import { LatestItem } from "./LatestItem";

export class LatestList extends Component<{ posts: any; totalCount: number }> {
  state = { current: 1, PAGE_SIZE: 5 };

  onChange = (current: number) => {
    window.scroll({ top: 0 });
    this.setState({
      current,
    });
  };

  render() {
    const { posts, totalCount } = this.props;
    const { current, PAGE_SIZE } = this.state;

    return (
      <div>
        {posts
          .slice(PAGE_SIZE * (current - 1), current * PAGE_SIZE)
          .map(({ node }: any) => (
            <LatestItem
              key={node.fields.slug}
              title={node.frontmatter.title}
              original={node.frontmatter.original}
              path={node.fields.slug}
              tag={node.frontmatter.tag}
              date={node.frontmatter.date}
              intro={node.excerpt}
            />
          ))}
        <div>
          <div
            style={{
              marginRight: 30,
              display: current === 1 ? "none" : "block",
            }}
            onClick={() => this.onChange(current - 1)}>
            上一页
          </div>
          <div
            style={{
              display:
                current === Math.floor(totalCount / PAGE_SIZE) + 1
                  ? "none"
                  : "block",
            }}
            onClick={() => this.onChange(current + 1)}>
            下一页
          </div>
        </div>
      </div>
    );
  }
}
