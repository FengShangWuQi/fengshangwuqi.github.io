import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { size } from "polished";

import { Header } from "src-components/headers";
import { BaseMenu, BaseMenuItem } from "src-components/menus";

import { Layout } from "../common/Layout";
import { Archive } from "../archive";

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={({
      site: {
        siteMetadata: { title },
      },
      allMarkdownRemark: { edges: posts, totalCount },
    }) => (
      <Layout>
        <Helmet title={title} />

        <BaseMenu right>
          {[
            { value: "ssr", label: "ssr" },
            { value: "latest", label: "最新" },
            { value: "archive", label: "归档" },
          ].map(item => (
            <BaseMenuItem key={item.value}>
              {item.label.toUpperCase()}
            </BaseMenuItem>
          ))}
        </BaseMenu>

        <div
          css={{
            ...size(400, "100%"),
          }}>
          <Header />
        </div>

        <Archive posts={posts} totalCount={totalCount} />
      </Layout>
    )}
  />
);
