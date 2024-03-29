---
title: 周报#08 @ 前端权限控制、GitHub Action、browser detector
tags:
  - Front-End
date: 2019-12-29
cover: images/issue-08.jpg
---

## 前端动态

### 1、[基于 RBAC 的前端权限控制](https://zhuanlan.zhihu.com/p/99172614)

当我们讨论到前端应用的权限控制时，不是在讨论如何去控制权限，而是在讨论如何将用户权限反映到页面元素的显隐上。如果用户没有权限访问请求，不仅会造成请求资源的浪费，还会降低用户体验。前端的权限控制就是为了解决这类问题。**RBAC** 是目前普遍使用的一种权限模型。本文会讨论如何基于 RBAC 权限模型去实现前端应用的权限控制。

### 2、[微信小程序自动化构建方案](https://juejin.im/post/5dfb3c1551882512607443db)

**jenkins** 是一款 **CI&CD** 的开源软件，用于自动化各种任务，包括构建、测试和部署软件。jenkins 支持各种运行方式，可通过系统包、Docker 或者一个独立的 java 程序，我们可以通过在 jenkins 上创建 job 来实现小程序的自动化构建。

### 3、[GitHub Actions 教程：定时发送天气邮件](http://www.ruanyifeng.com/blog/2019/12/github_actions.html)

**GitHub Actions** 是一个 **CI/CD**（持续集成/持续部署）工具，但也可用作代码运行环境。功能非常强大，能够玩出许多花样。比如每天清早收到一封天气预报邮件。

### 4、[云开发：未来的软件开发方式](https://www.phodal.com/blog/cloud-development/)

**云开发** 是一种解决方案，它解决的问题是：如何以更高效地方式进行软件开发？

### 5、[移动的彩虹下划线](https://css-tricks.com/moving-rainbow-underlines/)

作者非常喜欢 [Sandwich](https://sandwich.co/) 网站的设计，尤其是它那漂亮的标题，本文为大家解读该标题中的彩虹下划线如何实现。

### 6、[基础为零？如何将 C++ 编译成 WebAssembly](https://www.infoq.cn/article/I0KJPt57ToOSb4xwQGb6)

**WebAssembly** 是一个 W3C 推出的二进制指令格式，近日它的 1.0 版本也正式定稿成为了规范。本文以 C++ 为例，一步一步介绍如何把 C++ 代码编译成 **wasm** 并且运行起来。

### 7、[巧用 CSS 实现酷炫的充电动画](https://juejin.im/post/5e00240ee51d45583c1cc9a7)

循序渐进，看看只使用 CSS ，可以鼓捣出什么样的充电动画效果。

### 8、[20 个 2020 年软件开发趋势预测](https://www.infoq.cn/article/piUh6NWQCu8GZW1v8eQg)

企业上云已成不可逆的趋势，全面云计算时代宣告来临，微服务已成软件架构主流，Kubernetes 将会变得更酷，**2020** 年还有哪些技术趋势值得观察？一起来看！

### 9、[浏览器与前端性能灵魂之问（上）](https://juejin.im/post/5df5bcea6fb9a016091def69)

作为一个合格的前端工程师，浏览器相关的工作原理是我们进行性能优化的基石，该系列内容将涵盖 **浏览器工作原理**、**浏览器安全** 和 **性能监控和分析**，本文为该系列上篇。

### 10、[分享这半年的 Electron 应用开发和优化经验](https://juejin.im/post/5e0010866fb9a015fd69c645)

作者分享了这半年来 **Electron** 应用的开发和优化心得。

### 11、[数组拍平（扁平化） flat 方法实现](https://juejin.im/post/5dff18a4e51d455804256d31)

手写 **flat** 方法是一道非常基础的面试题，通常出现在笔试或者第一轮面试当中，主要考察基本的手写代码的能力。本文通过了解 flat 特性到实现 flat 再到接住面试官的连环追问来重新学习。

### 12、[令人期待的 JavaScript 新特性](https://www.infoq.cn/article/ZAYPIz9bbukZO3duRrIm)

一个 **ECMAScript** 标准的制作过程，包含了 **Stage 0** 到 **Stage 4** 五个阶段，每个阶段提交至下一阶段都需要 **TC39** 审批通过。本文介绍这些新特性处于 Stage 3 或者 Stage 4 阶段，这意味着应该很快在浏览器和其他引擎中支持这些特性。

### 13、[Vue 3.0 设计原则](https://vuetoronto.com/videos/design-principles-of-vue-3-evan-you/)

**尤雨溪** 在 **Toronto 2019** 的演讲，分享了 **Vue 3.0** 的更改以及背后的取舍。

## 明星项目

### 1、[koolob/programmer-crosstalk](https://github.com/koolob/programmer-crosstalk)

程序员相声。

### 2、[Tencent/Hippy](https://github.com/Tencent/Hippy)

腾讯开源内部跨端开发框架 **Hippy**，为传统 Web 前端设计，官方支持 **React** 和 **Vue** 两种主流前端框架，目前已有 18 款流行 App 在使用。

### 3、[ibitcy/eo-locale](https://github.com/ibitcy/eo-locale)

**国际化** react 应用程序：lightweight 优雅的轻量级（1.6kB）库。

### 4、[lancedikson/bowser](https://github.com/lancedikson/bowser)

一个简单、快速、好用的 **浏览器类型检测器**，同时支持浏览器和 Node.js 端。

## 本周热点

### 1、[苹果悬赏 100 万美元找漏洞](https://tech.sina.com.cn/it/2019-12-21/doc-iihnzhfz7348781.shtml)

苹果向所有安全研究人员开放了它的漏洞悬赏计划，为发现它的操作系统中的主要缺陷提供 **100 万美元** 或更多的奖励。

### 2、[微软在 VS Code 中添加圣诞图标惹争议](https://mp.weixin.qq.com/s/TD8JrSc9--pWi2VOCxeq1Q)

对于开源项目来说，一个细微的改动就会影响到无数使用该项目的产品、公司、生产环境。圣诞节在即，为了增加一些节日气氛，微软对 Visual Studio Code 进行了一些小的更改，在开源 IDE 左下角的“设置”图标上放了一顶圣诞老人的帽子，然而这很快就收到了用户投诉，在技术论坛以及 GitHub 社区引起了广泛讨论。

### 3、[微信确认已关闭朋友圈表情包评论功能](https://www.ithome.com/0/465/021.htm)

微信关闭了之前新增的朋友圈自定义表情评论功能，表情包照片全变成“[表情]”。根据推测，朋友圈表情包评论功能可能并非是正式功能，而是 A/B 型开启测试。

## 最后一提

1、**不能因为自己绝望，因为自己弱，再做了错事还不承担责任和骂名。有种东西叫身后名**。

-- [如何看待 12 月 24 日晚重庆沙坪坝三峡广场一男子从高楼坠落并砸死两名路人](https://www.zhihu.com/question/362805195/answer/950233623)
