---
title: 周报#15 @ Next.js 预渲染、content-visibility、Zero-runtime Stylesheets
tags:
  - Front-End
date: 2021-08-08
cover: images/issue-15.jpeg
---

## 前端动态

### 1、[西瓜客户端埋点实践：基于责任链的埋点框架](https://www.infoq.cn/article/P5HjNLgNmvvIfHaI7sxG)

这个框架更多是约定了一套责任链的协议，通过责任链的存在，方便埋点参数的收集上报。

### 2、[精读《默认、命名导出的区别》](https://github.com/ascoders/weekly/blob/master/%E5%89%8D%E6%B2%BF%E6%8A%80%E6%9C%AF/204.%E7%B2%BE%E8%AF%BB%E3%80%8A%E9%BB%98%E8%AE%A4%E3%80%81%E5%91%BD%E5%90%8D%E5%AF%BC%E5%87%BA%E7%9A%84%E5%8C%BA%E5%88%AB%E3%80%8B.md)

从代码可维护性角度出发，命名导出比默认导出更好，因为它减少了因引用产生重命名情况的发生，但命名导出与默认导出的区别不止如此，在逻辑上也有很大差异，为了减少开发时在这方面栽跟头，有必要提前了解它们的区别。

### 3、[Glitter text](https://wh0.github.io/2021/04/25/glitter.html)

生成和下载具有闪光效果的文本。

### 4、[Next.js 是怎么做预渲染的](https://juejin.cn/post/6991397899317805064)

本文介绍了 **Next.js** 提供的三种预渲染模式以及混合渲染模式。

### 5、[Rust 连续第六年成为 Stack Overflow 用户最喜欢的语言](https://www.solidot.org/story?sid=68453)

根据编程问答网站 **Stack Overflow** 的调查，**Rust** 连续第六年成为其用户最喜欢的语言，**AWS** 是最喜欢和最常用的云计算平台，**Svelte** 是最喜欢的 Web 框架，**Tensorflow** 是最想要的库，**JavaScript** 是最常用的编程语言，**React.js** 是最常用的 Web 框架。

### 6、[只需一行 CSS 代码，让长列表网页的渲染性能提升几倍以上](https://juejin.cn/post/6908521872577527822)

长列表网页，我们常采用虚拟滚动、分页、上拉加载等方式优化，现在，我们多了一种方式：**content-visibility**，只需要一行 CSS 代码，就可以实现可见网页只加载可见区域内容，使网页的渲染性能得到数倍的提升。

### 7、[如何阅读源码 —— 以 Vetur 为例](https://zhuanlan.zhihu.com/p/395405684)

本文结合 **Vetur** 源码，具体地讲解作者在阅读源码的各个阶段所思所想。

### 8、[Zero-runtime Stylesheets in TypeScript](https://vanilla-extract.style/)

```ts
import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
    white: "#fff",
  },
  space: {
    small: "4px",
    medium: "8px",
  },
});

export const hero = style({
  backgroundColor: vars.color.brandd,
  color: vars.color.white,
  padding: vars.space.large,
});
```

## 明星项目

### 1、[testjavascript/nodejs-integration-tests-best-practices](https://github.com/testjavascript/nodejs-integration-tests-best-practices)

**40+ Node.js** 集成测试最佳实践。

### 2、[bndw/wifi-card](https://github.com/bndw/wifi-card)

打印 **WiFi** 二维码。

## 本周热点

### 1、[科技巨头与员工争议远程办公](https://www.solidot.org/story?sid=68435)

美国科技巨头如 **Apple**、**Google** 和 **Facebook** 的高管正与它们的员工争议线下办公的必要性。

### 2、[腾讯所有游戏都将推行限时长限消费](https://www.solidot.org/story?sid=68444)

腾讯官方微信号“鹅厂黑板报”发布公告，将从《王者荣耀》试点，逐步面向全线游戏推出**“双减、双打、三提倡”**的七条新举措。
