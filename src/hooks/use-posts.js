import { graphql, useStaticQuery } from 'gatsby';

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes{
          frontmatter {
            title
            slug
            author
            image {
              sharp: childImageSharp {
                fluid (
                  maxWidth: 300
                  maxHeight: 300
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => ({
    slug: frontmatter.slug,
    title: frontmatter.title,
    author: frontmatter.author,
    image: frontmatter.image,
    excerpt,
  }));
};
