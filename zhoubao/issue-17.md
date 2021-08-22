---
title: 周报#17 @ Hooks 数据流、JS 写 PPT、新生代农民工
tags:
  - Front-End
date: 2021-08-22
cover: images/issue-17.jpeg
---

## 前端动态

### 1、[精读《一种 Hooks 数据流管理方案》](https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/206.%E7%B2%BE%E8%AF%BB%E3%80%8A%E4%B8%80%E7%A7%8D%20Hooks%20%E6%95%B0%E6%8D%AE%E6%B5%81%E7%AE%A1%E7%90%86%E6%96%B9%E6%A1%88%E3%80%8B.md)

对全局数据的使用，最方便的就是收拢到一个 **useXXX API**，并且还能区分静态、动态值，并在访问静态值时完全不会导致重渲染。

### 2、[基于 GitHub Discussions 的 Blog 框架](https://juejin.cn/post/6996845156783620104)

这是一篇铺垫文，Blog 脚手架正在编写中，支持 RSS 订阅，自动生成微信公众号文章等。

### 3、[Puppeteer 前端检测最佳实践](https://zhuanlan.zhihu.com/p/199282068)

基于 **puppeteer** 的前端检测不仅能够发现页面死链，也可以针对指定的链接规则做检测，最大限度的保障页面链接的有效性。

### 4、[yarn.lock 你锁明白了吗](https://juejin.cn/post/6996851359563644958#heading-14)

**yarn.lock** 是如何生成的？以及如何避免出现问题。

### 5、[PPT 居然可以用 JS 写](https://juejin.cn/post/6995000516941971487)

看 **reveal.js** 如何给你的 slides 带来新的好玩的东西，将汇报与分享变成乐趣。

### 6、[使用 Houdini 扩展 CSS 的跨浏览器绘制能力](https://mp.weixin.qq.com/s/HllB-ZAA5qhgJDIB5HIhyg)

**CSS Houdini** 是一个总称，它描述了一系列底层的浏览器 API，这些 API 为开发者提供了对编写的样式更强大的能力。

### 7、[你所需要知道的最新的 babel 兼容性实现方案](https://juejin.cn/post/6976501655302832159)

本文为了给大家带来最新的 **babel** 兼容性方案剖析，让大家对 **babel** 的兼容性处理机制有更透彻的了解。

### 8、['return await promise' vs 'return promise' in JavaScript](https://dmitripavlutin.com/return-await-promise-javascript/)

在异步函数中，使用 **return await promise** 和 **return promise** 有什么区别么？

## 明星项目

### 1、[Tunnel travel using CSS perspective](https://codepen.io/trangthule/pen/vYmpNYR)

![Tunnel travel using CSS perspective](./images/issue-17-CSS-perspective.jpeg)

### 2、[tnfe/wp2vite](https://github.com/tnfe/wp2vite)

一个让 **webpack** 项目支持 **vite** 的前端项目的转换工具。

## 本周热点

### 1、[阿里巴巴和腾讯将不再享受减税政策](https://www.williamlong.info/archives/6528.html)

此举反映了北京对从阿里巴巴到腾讯和美团等大型科技公司的监管紧缩，这些企业运用其庞大的数据，以牺牲用户为代价来造福投资者，饱受外界抨击。

### 2、[2020 年北京市外来新生代农民工监测报告发布](http://www.mohrss.gov.cn/SYrlzyhshbzb/jiuye/gzdt/202108/t20210816_420736.html)

就业集中于劳动密集型行业，从事信息传输、软件和信息技术服务业的 **新生代农民工** 占比大幅提高。
