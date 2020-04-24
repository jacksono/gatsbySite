import { useStaticQuery, graphql } from 'gatsby';

const UseInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 12) {
        nodes {
          id
          username
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 120, maxHeight: 120) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  return data.allInstaNode.nodes.map(photo => ({
    ...photo.localFile.childImageSharp,
    id: photo.id,
    username: photo.username,
    caption: photo.caption,
  }));
};

export default UseInstagram;
