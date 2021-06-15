const pageQuery = `{
  pages: allMdx(
    sort: { fields: [frontmatter___date], order: DESC }
  ) {
    edges {
      node {
        id
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}`;

function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName: process.env.APP,
  },
];

module.exports = queries;
