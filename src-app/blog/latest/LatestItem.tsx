import { Link } from 'gatsby';

import { React } from 'src-core/react';

import '../styles/LatestItem.css';

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
  const tags = tag.split(',').map(t => (
    <Link key={t} to={`/${t}`}>
      {t}
    </Link>
  ));

  return (
    <article className="post-item">
      <header className="post-item-header">
        <div className="header-tag">
          <span
            style={
              original
                ? {
                    backgroundColor: 'rgba(242,174,67,0.25)',
                    color: '#F2AE43',
                  }
                : {
                    backgroundColor: 'rgba(86, 192, 224, 0.25)',
                    color: '#56c0e0',
                  }
            }
            className="post-is-original">
            {original ? '原' : '译'}
          </span>
          {tags}
        </div>
        <h2 className="post-item-header-title">
          <Link to={path}>{title}</Link>
        </h2>
        <time className="post-item-published" dateTime={date}>
          {date}
        </time>
      </header>
      <p
        className="post-item-content"
        dangerouslySetInnerHTML={{ __html: intro }}
      />
      <Link to={path}>
        <span className="post-item-read-more">
          阅读全文
          <span>
            <span className="line left" />
            <span className="line top" />
            <span className="line right" />
            <span className="line bottom" />
          </span>
        </span>
      </Link>
    </article>
  );
};
