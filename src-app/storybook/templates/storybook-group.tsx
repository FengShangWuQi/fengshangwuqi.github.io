import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import { grid } from "src-core/style";

import { Layout, Center, Container } from "../common/Layout";
import { Header } from "../common/Header";
import { SideBar } from "../common/SideBar";
import { Content } from "../common/Content";

export const groupsQuery = graphql`
  query($group: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: { frontmatter: { group: { eq: $group } } }) {
      edges {
        node {
          id
          body
          frontmatter {
            group
            title
          }
        }
      }
    }
  }
`;

const StorybookGroup = ({
  data: { allMdx, site },
  pageContext: { group, groups, modules },
}: any) => {
  const { title: siteTitle } = site.siteMetadata;
  const storybooks = allMdx.edges;

  return (
    <Layout>
      <Helmet
        title={`${group} - ${siteTitle}`}
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
          {storybooks.map(({ node }: any) => (
            <Content key={node.id} title={node.frontmatter.title}>
              <MDXRenderer>{node.body}</MDXRenderer>
            </Content>
          ))}
        </Container>
      </Center>
    </Layout>
  );
};

export default StorybookGroup;
