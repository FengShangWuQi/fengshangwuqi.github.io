import React from "react";
import { Link } from "gatsby";

export const LatestItem = ({
  path,
  tag,
  title,
  date,
  intro,
  original,
}: {
  path: string;
  tag: string;
  title: string;
  date: string;
  intro: string;
  original: string;
}) => {
  const tags = tag.split(",").map(t => (
    <Link key={t} to={`/${t}`}>
      {t}
    </Link>
  ));

  return (
    <article>
      <header>
        <div>
          <span
            style={
              original
                ? {
                    backgroundColor: "rgba(242,174,67,0.25)",
                    color: "#F2AE43",
                  }
                : {
                    backgroundColor: "rgba(86, 192, 224, 0.25)",
                    color: "#56c0e0",
                  }
            }>
            {original ? "原" : "译"}
          </span>
          {tags}
        </div>
        <h2>
          <Link to={path}>{title}</Link>
        </h2>
        <time dateTime={date}>{date}</time>
      </header>
      <p dangerouslySetInnerHTML={{ __html: intro }} />
      <Link to={path}>
        <span>阅读全文</span>
      </Link>
    </article>
  );
};
