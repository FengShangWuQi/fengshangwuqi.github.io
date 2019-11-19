---
title: 周报 @ 2019.11.10
original: true
tags:
  - Weekly
  - Front-End
date: 2019-11-10
cover: header.png
---

## 前端动态

### 1、[TypeScript 发布 3.7](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/)

- [#33294](https://github.com/microsoft/TypeScript/pull/33294) 可选链；
- [#32883](https://github.com/microsoft/TypeScript/pull/32883) 空值合并；
- [#32695](https://github.com/microsoft/TypeScript/pull/32695) 断言函数；
- [#32372](https://github.com/microsoft/TypeScript/pull/32372) --declaration 和 --allowJs 允许一起使用；
- [#33473](https://github.com/microsoft/TypeScript/pull/33473) 扁平错误信息

点击 [post](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7/) 查看更多。

### 2、[玉伯 - 我的前端成长之路](https://www.yuque.com/yubo/morning/grow-up-at-alibaba)

本文是玉伯分享的个人成长和带团队的一些感悟，总结了三个关键词：**全情投入**、**守正出奇**、**愿等花开**。相信专注于事情，内心有相信，行动有坚持，成长往往是水到渠成。

### 3、[npm 发布 6.13.0，新增 fund 命令](https://github.com/npm/cli/releases/tag/v6.13.0)

npm 实现捐赠，首次为开源代码提供资助。自 [Standard JS 在项目中实验性内置广告](https://github.com/standard/standard/issues/1381) 事件后，npm 表示，打算在今年年底前为开源开发人员开发一个众筹平台。本周周二，npm 发布 [6.13.0](https://github.com/npm/cli/releases/tag/v6.13.0)，新增 [fund](https://github.com/npm/cli/pull/273) 命令，它的作用是为有意捐赠者指明捐赠平台。

### 4、[精读《React Conf 2019 - Day1》](https://zhuanlan.zhihu.com/p/89974892)

[React Conf 2019](https://www.youtube.com/playlist?list=PLPxbbTqCLbGHPxZpw4xj_Wwg8-fdNxJRh#reactconfvideos) 在今年 10 月份举办，内容质量还是一如既往的高。总的来看，今年的内容视野更广了，不仅仅有技术内容，还有宣扬公益、拓展到移动端、后端，最后还有对 web 发展的总结与展望。这届 React Conf 让我们看到前端更多的可能性，我们不仅要关注技术实现细节，更要关注行业标准以及团队愿景。

### 5、[如何启用 React 并发模式](https://kentcdodds.com/blog/how-to-enable-react-concurrent-mode)

[并发模式](https://reactjs.org/docs/concurrent-mode-intro.html) 是一组新功能，可以帮助 React 应用程序保持响应状态，并适当调整用户的设备功能和网络速度。不管是对 **UX**（用户体验），还是 **DX**（开发者体验），它都是一个巨大的改进。本文描述了它的启用方法以及注意事项。

### 6、[The Svelte Handbook](https://www.freecodecamp.org/news/the-svelte-handbook/)

[Svelte](https://github.com/sveltejs/svelte) 是由 Rich Harris 也是 rollup 的作者，前端界的轮子哥，创建的 JavaScript UI 库，首次提交于 2016，目前处于 V3。该框架最大的特点是没有 virtual DOM，应用程序打包后的体积能做到非常小，被称为三大框架的替代方案。尤雨溪曾评价此框架为最适合编译可独立分发的 Web Components 的框架。本手册可帮助读者快速学习 Svelte 并熟悉它的工作原理。

### 7、[Winter - 前端团队的成长](https://juejin.im/post/5dbed095e51d456f28370ca1)

本文是 Winter 为政采云前端团队做的关于 **前端团队成长** 的主题分享的实录。最终的总结是：从公司的角度来看，衡量一个前端团队价值的方式是相似的，前端团队的基石是质量和效率，在此基础上，区分前端团队的核心因素是业务价值，对于少数前端团队，可能还会为公司和行业带来创新。

### 8、[掌控前端数据流，响应式编程让你看得更远](https://www.infoq.cn/article/kzyb9IEj6iyHegBNrLgd)

InfoQ 采访到近期参与 JSConf China 2019 的演讲嘉宾 -- 豆瓣阅读前端负责人马申彦，就 **响应式编程** 以及豆瓣阅读的前端实践进行了探讨，在 JSConf 上，他也对响应式编程进行了演讲分享。本文为采访全文整理，希望对正在从事前端开发的你有所帮助。

### 9、[Snyk 发布最新 JavaScript 框架安全性报告](https://snyk.io/blog/javascript-frameworks-security-report-2019/)

[Snyk](https://snyk.io/) 主要调查了 **Angular** 以及 **React** 生态系统中的安全漏洞和风险，同时也连带分析了 Vue.js、Bootstrap 和 jQuery，发现许多下载次数高达百万次的热门模块都存在漏洞，最常见的问题就是跨站脚本漏洞（**XSS**）。Snyk 提到，React 核心组件存在数个漏洞，只有一个 React 核心项目漏洞，被指定官方 CVE 编号，Snyk 认为，这证明了需要有一个漏洞数据库记录开源社群的活动，以便发现相关的安全问题。

### 10、[2019 成都 Web 全栈大会](https://web-conf.dev/#2019/)

**成都 Web 全栈大会** 是一场集 Web 前后端，跨平台客户端领域的综合性开发者年会，是成都乃至整个西南地区开发者学习、交流的盛会，也是成都本土优秀科技企业，国内外名企在地宣传、招聘的绝佳机遇！距离本次大会报名截止时间已经不到一周。

## 明星项目

### 1、[immer](https://github.com/immerjs/immer)

还在使用 [immutable-js](https://github.com/immutable-js/immutable-js) 么，Immer 是 mobx 的作者写的一个 immutable 库，核心实现是利用 ES6 的 proxy，几乎以最小的成本实现了 js 的 **不可变数据结构**，简单易用、体量小巧、设计巧妙，满足了我们对 JS 不可变数据结构的需求。最近发布 V5，支持 Map 和 Set。

```jsx
setState(
  produce(usersById_v1, draft => {
    // Modifying a map results in a new map
    draft.set("michel", { name: "Michel Weststrate", country: "NL" });
  }),
);
```

### 2、[swr](https://github.com/zeit/swr)

出自 zeit，一个用于请求远程数据的 React Hooks 库，相比常见的数据请求库提供了很多很酷且很有脑洞的特性，比如导航切换时使用缓存数据进行优先渲染然后在进行对比更新，数据在 focus 时更新，轮询检查更新，分页按需更新等，是具有较大潜力的请求类工具库。

```jsx
// When passing a function, SWR will use the
// return value as `key`. If the function throws,
// SWR will know that some dependencies are not
// ready. In this case it is `user`.
const { data: user } = useSWR("/api/user");
const { data: projects } = useSWR(() => "/api/projects?uid=" + user.id);
```

### 3、[chakra-ui](https://github.com/chakra-ui/chakra-ui)

Chakra UI 提供了一组可访问，可重用和可组合的 React 组件，这些组件使构建网站或应用程序变得非常容易。

```jsx
// font-size of `theme.fontSizes.md`
<Text fontSize="md" />

// shorthand using the `Flex` component
<Flex align="center" justify="center">
  Flex Container
</Flex>
```

## 本周热点

### 1、[GitLab 拒收中国和俄罗斯人](https://gitlab.com/gitlab-com/www-gitlab-com/issues/5555)

近日，由谷歌投资的全球第二大开源代码托管平台 GitLab 宣布了一个“封锁令”，禁止给中国/俄罗斯公民提供 offer，并表示在当前的地缘政治环境下，这是最为人道的解决方案。

### 2、[苹果 Mac App Store 拒绝 Electron Apps](https://david.dev/you-cannot-submit-an-electron-6-or-7-app-to-the-apple-store)

开发者报告，苹果 Mac App Store 的应用审核流程开始自动拒绝使用 Electron 框架开发的 App，原因是它们使用的私有 API 调用。这些 API 调用是 Electron 框架的一部分，并不在应用之中。

## 最后

> 作者留了一个问题给你，并且不给答案。

我们有一个 timer 函数，它返回的是一个 Promise，这个 Promise 在随机一段时间后 resolve。我们用 Promise.all 接受两个 timer，最终打印的是什么？

```js
const timer = a => {
  return new Promise(res =>
    setTimeout(() => {
      res(a);
    }, Math.random() * 100),
  );
};

const all = Promise.all([timer("first"), timer("second")]).then(data =>
  console.log(data),
);
```
