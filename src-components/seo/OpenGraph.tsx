import React from "react";
import Helmet from "react-helmet";

export const OpenGraph = ({
  title,
  description,
  url,
  imageSrc,
  isBlogPost,
}: {
  title: string;
  description: string;
  url: string;
  imageSrc: string;
  isBlogPost?: boolean;
}) => {
  return (
    <Helmet
      meta={[
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:description",
          content: description,
        },
        {
          name: "og:type",
          content: isBlogPost ? "article" : "website",
        },
        {
          name: "og:url",
          content: url,
        },
        {
          name: "og:image",
          content: imageSrc,
        },
      ]}
    />
  );
};
