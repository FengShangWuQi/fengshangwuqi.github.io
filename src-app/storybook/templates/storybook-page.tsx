import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { grid } from "src-core/style";

import { Layout, Center, Container } from "../common/Layout";
import { Header } from "../common/Header";
import { SideBar } from "../common/SideBar";
import { Content } from "../common/Content";

export const storybookQuery = graphql`
  query($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        group
        module
        title
      }
    }
  }
`;

export default ({
  data: { mdx, site },
  pageContext: { modules, groups },
}: any) => {
  const { title: siteTitle } = site.siteMetadata;
  const { group, title: storybookbTitle } = mdx.frontmatter;

  return (
    <Layout>
      <Helmet
        title={`${storybookbTitle} - ${siteTitle}`}
        meta={[
          {
            name: "viewport",
            content: "user-scalable=no",
          },
        ]}
      />

      <Header groups={groups} />
      <Center
        css={{
          ...grid({
            gridTemplateColumns: "220px auto",
            gridColumnGap: 40,
          }),
        }}>
        <SideBar group={group} modules={modules} />
        <Container>
          <Content title={storybookbTitle}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </Content>
        </Container>
      </Center>
    </Layout>
  );
};
