import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const response = useStaticQuery(graphql`
    {
      site{
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return response.site.siteMetadata;
};

export default useSiteMetadata;
