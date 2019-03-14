import React from "react";
import Helmet from "react-helmet";

export const SchemaOrg = ({
  isBlogPost,
  url,
  title,
  imageSrc,
  description,
  author,
  datePublished,
}: {
  isBlogPost?: boolean;
  url: string;
  title: string;
  imageSrc: string;
  description: string;
  author: string;
  datePublished?: string;
}) => {
  const baseSchema = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
    },
  ];
  const postSchema = [
    ...baseSchema,
    {
      "@context": "http://schema.org",
      "@type": "BlogPosting",
      url,
      name: title,
      headline: title,
      image: imageSrc,
      description,
      author: {
        "@type": "Person",
        name: author,
      },
      publisher: {
        "@type": "Person",
        name: author,
      },
      datePublished,
    },
  ];
  const schema = isBlogPost ? postSchema : baseSchema;

  return (
    <Helmet
      script={[
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ]}
    />
  );
};
