import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

export const SEO = () => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const { title, description, url, image, twitterUsername } = site.siteMetadata;

  const seo = {
    title: title,
    description: description,
    image: `${url}${image}`,
    url: `${url}${pathname}`,
  };

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        image
        twitterUsername
      }
    }
  }
`;
