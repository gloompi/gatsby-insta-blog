import { useStaticQuery, graphql } from 'gatsby';

const useInstagram = () => {
  const result = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          caption
          username
          localFile {
            childImageSharp {
              fluid (maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return result.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username,
  }));
};

export default useInstagram;
