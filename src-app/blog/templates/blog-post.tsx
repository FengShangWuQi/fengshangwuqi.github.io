import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import { get } from "lodash";

import { React, Component } from "src-core/react";

import { Layout } from "../common/Layout";
import { Header } from "../common/Header";

const loadScript = (url: string) => {
  const d = document,
    s = d.createElement("script");
  s.src = url;
  s.setAttribute("data-timestamp", `${new Date()}`);
  (d.head || d.body).appendChild(s);
};

export default class BlogPost extends Component<{ data: any }> {
  componentDidMount() {
    [
      "https://feng-shang-wu-qi-de-ri-zhi.disqus.com/embed.js",
      "https://platform.twitter.com/widgets.js",
    ].map(url => loadScript(url));
  }

  render() {
    const { data } = this.props;
    const { html, frontmatter } = get(data, "markdownRemark");
    const { title, tag: tags, date, original } = frontmatter;

    const postTags = tags.split(",").map((tag: string) => (
      <Link key={tag} to={`/${tag}`}>
        {tag}
      </Link>
    ));

    const center = (
      <div>
        <div>
          <span>{original ? "原" : "译"}</span>
          {postTags}
        </div>
        <h1 style={{ fontSize: "2.1em" }}>{title}</h1>
      </div>
    );
    const bottom = (
      <div>
        <div>
          <div>
            <Link to="/">{title}</Link>
          </div>
          <div>{date}</div>
        </div>
        <div>
          <img src={require("../images/avatar.jpg")} alt="枫上雾棋" />
        </div>
      </div>
    );

    return (
      <Layout>
        <Helmet title={`${title} - 枫上雾棋的日志`} />
        <Header center={center} bottom={bottom} />
        <div style={{ top: -25 }}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <div id="disqus_thread" />
        </div>
      </Layout>
    );
  }
}

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      internal {
        content
      }
      frontmatter {
        title
        tag
        date(formatString: "YYYY-MM-DD")
        original
      }
    }
  }
`;
