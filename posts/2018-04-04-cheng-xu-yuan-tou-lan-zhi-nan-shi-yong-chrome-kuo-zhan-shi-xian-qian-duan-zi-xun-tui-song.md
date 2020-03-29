---
title: 程序员偷懒指南 -- 使用 chrome 扩展实现前端资讯推送
original: true
tags:
  - Chrome Extension
date: 2018-04-04
cover: /assets/posts/2018-04-04-cheng-xu-yuan-tou-lan-zhi-nan-shi-yong-chrome-kuo-zhan-shi-xian-qian-duan-zi-xun-tui-song.png
---

> 最近接触了一下 **chrome 扩展**，发现这确实是一个好东西，使用简单的 **HTML**，**CSS** 和 **JavaScript** 就可为浏览器新增我们想要的功能，并且，使用 **chrome 扩展** 开发，不用担心 **跨域** 等消息传递问题，还有讨厌的 **兼容性** 问题，结合操作用户页面 dom，开发的开心度可谓是可观的。下面，我们就一起通过一个实例来看看 **chrome 扩展** 开发。

这个实例不是很复杂，是我之前一直想做的：**通过 chrome 扩展同步每日阅读的不错的前端资讯**。众所周知，前端社区尤为活跃，学习前端的网站也是一大把，知名社区，专业博客，流行周刊，活跃博客等，一顿饭的功夫，可能就会有新的框架，库或思想出现，面对如此多的链接，我们该如何选择，相对 **微信公众号**，**twitter** 和 **newsletter** 等方式，个人感觉 **chrome 扩展** 也不失为一种友好的方式。

## 构思

首先，我们得准备一个仓库来储存我们每日收集的资讯，这个应该没有比 **GitHub** 更为合适的了，并且 **GitHub** 拥有丰富的 **REST API** 为我们解决系列的问题，比如：

```
POST /markdown
```

可以将 text 渲染成 Markdown 文档，如下：

```js{1}
const res = await fetch("https://api.github.com/markdown", {
  method: "POST",
  body: JSON.stringify({
    text,
  }),
});

const md = await res.text();
```

返回：

```html
"
<blockquote>
  <h1>
    <a
      id="user-content-hello-fengshangwuqi"
      class="anchor"
      href="#hello-fengshangwuqi"
      aria-hidden="true"
      ><span aria-hidden="true" class="octicon octicon-link"></span></a
    >hello fengshangwuqi
  </h1>
</blockquote>
"
```

然后我们就可以使用熟悉的前端基本技能任意地操作 **dom** 和修改样式，最终将其添加到 **popup** 的 **document** 中。

于是，立即创建了仓库 [Daily-Front-End-News](https://github.com/FengShangWuQi/Daily-Front-End-News)。

## 准备

### 书写配置文件 manifest.json

先从 [chrome 开发文档](https://crxdoc-zh.appspot.com/extensions/getstarted) 复制配置模板：

```json
{
  "manifest_version": 2,

  "name": "One-click Kittens",
  "description": "This extension demonstrates a browser action with kittens.",
  "version": "1.0",

  "permissions": ["https://secure.flickr.com/"],
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  }
}
```

- **name** 和 **version** 是必须的；
- Chrome 应用的开发者当前必须指定 **manifest_version**: 2；
- **permissions**：声明需要申请的权限，比如访问浏览器选项卡（tabs）、浏览器通知（notifications）等，可以根据需要添加，目前，我们的实例主要是从 GitHub 获取数据并展示数据，暂时不需要申请什么 permissions；
- **browser_action**：指定扩展的图标放在 Chrome 工具栏中，它定义了扩展图标文件位置（default_icon）、悬浮提示（default_title）和点击扩展图标所显示的页面位置（default_popup）；
- **background**：一个长时间运行的脚本，在扩展的整个生命周期都存在，用于管理一些任务和状态；
- **options_page**：定义了扩展的设置页面，配置后在扩展图标点击右键可以看到选项 ，点击即打开指定页面;
- **content_scripts**：直接注入页面的脚本。

我们要从 **GitHub** 获取数据，并在 **popup.html** 中展示出来，需要申请 **webRequest** 权限，用于点击图标弹出的窗口和背景页之间的数据传递，并添加需要的 **background** 和 **popup** 脚本，其中，**background** 脚本在配置文件中添加，而 **popup** 脚本通过 **script** 标签在 **popup.html** 引入。

### 消息传递

当我们点击图标，打开 **popup.html** 时，**popup** 脚本会去从 **背景页** 获取需要的数据，这里就涉及到内容脚本与扩展其余部分之间的通信。chrome 扩展的 [数据传递](https://crxdoc-zh.appspot.com/apps/messaging) 方式有多种，比如 **简单的一次性请求**，**长时间的连接**，**跨扩展程序消息传递** 等，目前我们用到的应该只有一次性请求。

一次性请求即使用简单的 [runtime.sendMessage](https://crxdoc-zh.appspot.com/apps/runtime#method-sendMessage) 方法，向扩展的另一部分发送消息，并且它提供可选的 callback 处理回应，如下：

```js{3}
chrome.runtime.sendMessage(
  {
    action: "getNew",
  },
  res => {
    console.log(res);
  },
);
```

在背景页，我们使用 [runtime.onMessage](https://crxdoc-zh.appspot.com/apps/runtime#event-onMessage) 事件监听器来处理消息，如下：

```js{4}
async function handleMessage(message, sender, sendResponse) {
  switch (message.action) {
    case "getNew":
      sendResponse(await getNew());
      break;
    default:
      sendResponse(false);
  }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  handleMessage(message, sender, sendResponse);
  return true;
});
```

其中，`sendResponse()` 即背景页的回应，并且，某一次事件只有第一次调用 `sendResponse()` 有效，其他回应将被忽略，`return true` 是用于处理我们的异步请求，如果删除，异步请求仍能发送，但返回给 **popup** 的数据将不再是请求得到的数据。

## 使用 REST API 获取数据

GitHub 有这个一个 **REST API**：

```rest
GET /repos/:owner/:repo/contents/:path
```

如果 contents 是一个文件，它将返回下面这样的一个对象：

```json
{
  "type": "file",
  "name": "README.md",
  "path": "README.md",
  ...
}
```

如果 contents 是一个目录，它将返回：

```json
 {
    "type": "dir",
    "name": "fileName",
    "path": "folder/fileName",
    ...
  }
```

我们可以如下储存我们的资讯：

```
history
├── 2018
│   ├── 03
│   │   └── 04
│   │   |   ├── README.md
│   │   └── 05
│   │       ├── README.md
```

获取当前目录下最新资讯的 path：

```js
const year = await GitHubAPI.getContent("history");
const month = await GitHubAPI.getContent(`history/${year[year.length - 1]}`);
const day = await GitHubAPI.getContent(
  `history/${year[year.length - 1]}/${month[month.length - 1]}`,
);

const path = `${year.pop()}/${month.pop()}/${day.pop()}`;
```

path 拿到了，我们就可以通过上面的 **REST API** 获取相应的 content：

```jsx {10,24}
const GitHubAPI = new (class {
  constructor(prefix, owner, repo) {
    this.prefix = prefix;
    this.owner = owner;
    this.repo = repo;
  }

  /* render an arbitrary markdown document */
  async getMarkdown(text) {
    const res = await fetch(`${this.prefix}/markdown`, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
    });
    const md = await res.text();

    return md;
  }

  /* get contents */
  async getContents(path) {
    const res = await fetch(
      `${this.prefix}/repos/${this.owner}/${this.repo}/contents/${path}`,
      {
        method: "GET",
      },
    );
    const contents = await res.json();

    return contents;
  }
})(githubAPIPrefix, owner, repo);

export default GitHubAPI;
```

上面使用 **class** 对 **API** 做了一个封装，并非完全出于对代码的整洁，还有考虑到避免重名以及隐藏域名等敏感信息等。

## 连接 background 和 popup

接下来的问题是 **popup** 给 **background** 发送消息获取对应的数据，在上面的准备中，其实我们已经实现的差不多了。

**popup** 发送消息获取 paths，即所有可以查看的资讯的路径，我们将最新资讯的 path 存储在 **localStorage** 中，如果 **localStorage** 中最新资讯的 path 不全等于实际最新资讯的 path，那么我们就执行请求获取实际最新资讯的 path。

值得注意的是 GitHub **REST API** 有一个 [Rate Limit](https://developer.github.com/v3/#rate-limiting)，它限制了每小时你发送请求的次数，如果请求没有认证，超过次数后会得到一个尴尬的提示：

```json
{
  "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
  "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```

凡是有调用 GitHuub **REST API** 的 Chrome 扩展，都会提示让用户进行认证，常用认证的方式是使用 token。

紧接着我们发送一个新的消息获取当前想要查看的资讯，消息回应资讯对应的 content，还有资讯的 path，核心代码如下：

```js
export const getCurrContent = (paths, path) => {
  chrome.runtime.sendMessage(
    {
      action: "getCurrContent",
      payload: {
        path,
      },
    },
    ({ url, text }) => {
      const header = new Header(url, path, paths);

      const pagination = {
        current: paths.indexOf(path) + 1,
        total: paths.length,
      };
      const item = new Item(text, pagination, path);

      header.render();
      header.addListener();
      item.render();
    },
  );
};
```

## 调试

**popup** 跟普通页面一样，右键检查，**background** 需要进入扩展程序页面，点击检查视图背景页。

![debug](/assets/posts/2018-04-04-cheng-xu-yuan-tou-lan-zhi-nan-shi-yong-chrome-kuo-zhan-shi-xian-qian-duan-zi-xun-tui-song/debug.png)

## 总结

就这样，该 **chrome 扩展** 初始版本就没有什么阻塞项了，目前截图如下：

![news](/assets/posts/2018-04-04-cheng-xu-yuan-tou-lan-zhi-nan-shi-yong-chrome-kuo-zhan-shi-xian-qian-duan-zi-xun-tui-song/news.png)

[扩展](https://chrome.google.com/webstore/detail/front-end-news/dcijaoifeaaafbdglmalaajeedcamogg) 初始版本已发布，点击前面的链接可查看更多，如果有小伙伴感兴趣，[chrome-Daily-Front-End-news](https://github.com/FengShangWuQi/chrome-Daily-Front-End-news) 仓库期待收到你的 PR，[Daily-Front-End-News](https://github.com/FengShangWuQi/Daily-Front-End-News) 同上。
