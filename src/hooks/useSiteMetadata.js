import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadatametaData = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetadatametaData;
