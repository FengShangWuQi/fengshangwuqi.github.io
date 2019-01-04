import * as React from "react";

import { Header } from "./Header";
import { SocialLink } from "./SocialLink";

export const BlogHeader = ({ totalCount }: { totalCount: number }) => {
  const socials = [
    {
      title: "Twitter",
      url: "https://twitter.com/fengshangwuqi",
    },
    {
      title: "GitHub",
      url: "https://github.com/FengShangWuQi",
    },
    {
      title: "WeChat",
    },
    {
      title: "Email",
    },
    {
      title: "Newsletter",
      url: "https://tinyletter.com/fengshangwuqi",
    },
  ];
  const leftCenter = (
    <div>
      <div style={{ width: 100 }}>
        <img src={require("../images/avatar.jpg")} alt="枫上雾棋" />
      </div>
      <div>
        <div>{`${totalCount} 篇文章`}</div>
        <h1>枫上雾棋的日志</h1>
        <ul>
          {socials.map(social => (
            <SocialLink key={social.title} social={social} />
          ))}
        </ul>
      </div>
    </div>
  );

  return <Header leftCenter={leftCenter} />;
};
