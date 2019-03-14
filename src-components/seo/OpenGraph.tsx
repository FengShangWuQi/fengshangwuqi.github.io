import React from "react";
import Helmet from "react-helmet";

export const OpenGraph = ({
  title,
  url,
  imageSrc,
  isBlogPost,
}: {
  title: string;
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
