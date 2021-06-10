import React, { useState, useEffect } from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet-async";

import { grid } from "src-core/style";
import { parseSearchString } from "utils/search";

import { Layout, Center, Container } from "../common/Layout";
import { Header } from "../common/Header";
import { SideBar } from "../common/SideBar";
import { Content } from "../common/Content";

export const query = graphql`
  query GroupPageQuery($group: String) {
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
            module
            name
          }
        }
      }
    }
  }
`;

const StorybookGroup = ({
  location,
  data: { allMdx, site },
  pageContext: { group, groups, modules },
}: any) => {
  const { title: siteTitle } = site.siteMetadata;

  const { module, name } = parseSearchString(location.search) as {
    module?: string;
    name?: string;
  };

  const [storybooks, setStorybooks] = useState(allMdx.edges);

  useEffect(() => {
    if (module && name) {
      const newStorybooks = allMdx.edges.find(
        ({ node }: any) =>
          node.frontmatter.module === module && node.frontmatter.name === name,
      );
      setStorybooks([newStorybooks]);
    } else {
      setStorybooks(allMdx.edges);
    }
  }, [module, name]);

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
        <SideBar pathPrefix={location.pathname} modules={modules} />
        <Container>
          {storybooks.map(({ node }: any) => (
            <Content key={node.id} title={node.frontmatter.name}>
              <MDXRenderer>{node.body}</MDXRenderer>
            </Content>
          ))}
        </Container>
      </Center>
    </Layout>
  );
};

export default StorybookGroup;
