import React from "react";
import Helmet from "react-helmet";

export const TwitterCard = ({
  title,
  description,
  imageSrc,
  creator,
}: {
  title: string;
  description: string;
  imageSrc: string;
  creator: string;
}) => {
  return (
    <Helmet
      meta={[
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: imageSrc,
        },
        {
          name: "twitter:creator",
          content: creator,
        },
      ]}
    />
  );
};
