---
title: 周报#02 @ React 数据请求、Portals、react-adaptive-hooks
tags:
  - Front-End
date: 2019-11-17
cover: images/issue-02.jpg
---

## 前端动态

### 1、[2019 前端工具调查结果](https://ashleynolan.co.uk/blog/frontend-tooling-survey-2019-results)

在 CSS 工具方面，**Sass** 仍然是最受欢迎的 CSS 处理器；大多数开发人员现在选择不在其项目中使用任何 CSS 框架；减少使用 CSS 并使用 **CSS 命名方案** 的开发人员的数量超过了未使用 CSS 的开发人员；**CSS-in-JS** 继续以稳定的速度增长。在 JavaScript 框架和库方面，**React** 依旧保持领先地位，**Vue** 紧随其后。结果中令人意外的是与 **可访问性测试** 相关的数字，有 63.13％ 的受访者表示他们没有使用任何工具来对其项目进行可访问性测试。

### 2、[来自 25 位 React 专家的经验，使你的工作效率提升](https://www.telerik.com/kendo-react-ui/react-best-practices-and-productivity-tips/?utm_medium=cpm&utm_source=reactstatus&utm_campaign=kendo-ui-react-blog-productivity-tips-pp&utm_content=sponsored-link)

从 React 和 JavaScript 专家那里获取的关于如何提升效率的一些提示：为什么以及如何专注于 **Vanilla React**；**Redux** 并不是 React 的一部分；其实你不总是需要 React；拥抱 **TypeScript**；大佬使用的一些插件等。

### 3、[Lifecycle methods，hooks，suspense：哪个更适合来请求数据](https://dmitripavlutin.com/react-fetch-lifecycle-methods-hooks-suspense/)

作者综合比较了 **Lifecycle methods**，**hooks**，**suspense** 三种方式在 React 中请求数据，分别列出了各自的优缺点，最终的结论是 **suspense** 更接近 React 的声明式。

### 4、[谷歌推出新提案 Portals：Web 上的无缝跳转体验](https://www.infoq.cn/article/DXYNLbY6EBLkybRRYaBx)

想要了解新提案的 **Portals API** 是如何改善页面跳转用户体验的吗？本文将主要对 **Portals** 的具体内容、**Portals** 在 Chrome Canary 中的试用、**Portals** 的规范等几个方面进行详细讲解。如果你希望用户在浏览自家网站时，能够在不同页面跳转得更加流畅，不妨来读一读这篇文章。

### 5、[尤雨溪谈 Vue.js：缔造自由与真我](https://zhuanlan.zhihu.com/p/58335278)

尤雨溪回答了关于 **Vue** 的一系列问题，包括 **Vue** 的产生，**Vue** 的发展历程，**Vue** 的规划，以及一些个人经验的分享等。尤雨溪说，**Vue** 带给自己最大的收获就是 **自由**。

### 6、[React + Typescript 工程化治理实践](https://github.com/ProtoTeam/blog/blob/master/201911/2.md)

本文是作者对一次 React + TypeScript 组件的工程化治理过程所做的总结，主要针对静态检查，开发体验和代码质量三个方面。

### 7、[Lodash 源码中的那些迷人的细节](https://zhuanlan.zhihu.com/p/32823459)

在 Lodash 中，函数的实现非常严谨、高效、兼容性强，以及具有一定的前瞻性，本文只拎出来一丁点儿细微的点，强力建议去撸源码。

### 8、[迈向更快的网络](https://blog.chromium.org/2019/11/moving-towards-faster-web.html)

Chrome 的目标是让用户告别加载延迟，未来，Chrome 可能会在在用户界面中使用明显的徽章来标记加载缓慢的网站。Google 希望网站开发者提前做好准备，它推荐了一系列工具帮助开发者识别导致网站加载缓慢的因素，这些工具包括 [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) 和 [Lighthouse](https://developers.google.com/web/tools/lighthouse/)，并推荐阅读 [Web.dev/fast](https://web.dev/fast/)。

## 明星项目

### 1、[react-interactive-paycard](https://github.com/jasminmif/react-interactive-paycard)

![react-interactive-paycard](images/issue-02-react-interactive-paycard.jpg)

有人看到 [JavaScript Weekly](https://javascriptweekly.com/issues/461) 最近展示的 [vue-interactive-paycard](https://github.com/muhammederdem/vue-interactive-paycard)，认为我们也需要 React 版本。

### 2、[react-adaptive-hooks](https://github.com/GoogleChromeLabs/react-adaptive-hooks)

```jsx
const MyComponent = () => {
  const { effectiveConnectionType } = useNetworkStatus();

  let media;
  switch (effectiveConnectionType) {
    case "slow-2g":
      media = <img src="..." alt="low resolution" />;
      break;
    case "2g":
      media = <img src="..." alt="medium resolution" />;
      break;
    case "3g":
      media = <img src="..." alt="high resolution" />;
      break;
    ...
  }

  return <div>{media}</div>;
};
```

使用这些 hooks 和 utilities 可以帮你向用户提供最适合其设备和网络的出色体验。

## 本周热点

### 1、[GitHub 将开源软件保存 1000 年：为了留给子孙后代](https://archiveprogram.github.com/)

GitHub 宣布开放 **Arctic Code Vault**（“北极代码库”）的计划。为了把开源软件留给子孙后代，将在 2020 年 2 月 2 日为所有公共存储库生成快照，然后保存在北极一个地下 250 米的废弃煤矿。快照储存在胶片上，寿命高达 1000 年。

### 2、[GitHub for mobile](https://github.com/mobile)

GitHub 首次发布官方的手机客户端，iOS 用户可 “尝鲜”，安卓版将稍后发布。目前还是 beta（公测版），可以通过 [官方渠道](https://github.com/mobile/beta?platforms=ios) 进行下载。

## 最后一提

1、上周留了一个问题，答案是不管程序执行多少道，最终打印的都是 **["first", "second"]**，因为 [Promise.all](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) 返回值将会按照参数内的 promise 顺序排列，而不是由调用 promise 的完成顺序决定。

2、a.x 是什么

```jsx
var a = { n: 1 };
a.x = a = { n: 2 };
console.log(a.x);
```
