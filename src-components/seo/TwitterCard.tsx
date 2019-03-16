import React from "react";
import Helmet from "react-helmet";

import { IBaseSEO } from "./SEO";

export interface ITwitterCardProps extends IBaseSEO {
  twitter: string;
}

export const TwitterCard = ({
  title,
  description,
  imageSrc,
  twitter,
}: ITwitterCardProps) => {
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
          content: twitter,
        },
      ]}
    />
  );
};
