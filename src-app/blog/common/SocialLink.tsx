import { React } from 'src-core/react';

export const SocialLink = ({
  social,
}: {
  social: { title: string; url?: string };
}) => {
  const { title, url } = social;
  let item = null;

  switch (title) {
    case 'WeChat':
      item = (
        <li>
          <div id="WeChat" title="WeChat">
            <img src={require('../images/WeChat.png')} alt="WeChat" />
            <div>
              <img src={require('../images/QRCode.jpeg')} alt="QR Code" />
            </div>
          </div>
        </li>
      );
      break;
    case 'Email':
      item = (
        <li>
          <img
            src={require('../images/Email.png')}
            alt="Email"
            title="fengshangwuqi@gmail.com"
          />
        </li>
      );
      break;
    default:
      item = (
        <li>
          <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
            <img src={require(`../images/${title}.png`)} alt={title} />
          </a>
        </li>
      );
  }

  return item;
};
