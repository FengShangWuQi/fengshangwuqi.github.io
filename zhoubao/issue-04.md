---
title: 周报#04 @ 框架设计、业务中台、Serverless 前后端一体化
tags:
  - Front-End
date: 2019-12-01
cover: images/issue-04.jpg
---

## 前端动态

### 1、[如何使用 CSS :is() 轻松定位元素](https://webdesign.tutsplus.com/articles/new-css-is-for-easy-element-targeting--cms-34223?ref=webdesignernews.com)

新的 CSS **:is()** 伪类将逐渐成为定位元素更友好的方式，它不仅节省了代码行，而且保持了 CSS 的可读性。

### 2、[2019 JavaScript 状态调查](https://survey.stateofjs.com/)

流行的 **JavaScript 状态调查** 又开始了，今年是该项调查的第四年，将一如既往地通过整理收集反馈的方式来帮助开发者决策接下来的 JavaScript 学习方向和技术选型。

### 3、[尤雨溪：在框架设计中寻求平衡](https://juejin.im/post/5d45be46f265da03cf7a70d7)

通过本文，我们可以了解在当前框架三足鼎立的局势下，如何直接透过框架本身了解到更多有关框架设计中的的权衡，以及 **Vue** 是如何进行取舍的。

### 4、[深入浅出 SWR 原理](https://zhuanlan.zhihu.com/p/93824106)

本文主要是基于 **SWR** 源码对其原理进行分析，但并没有直接从源码开始，而是从实际需求场景一步一步推导进而实现 **SWR** 的功能。最终结论是 **useSWR** 除了提供常见的请求功能外，间接的还提供了一种 **状态管理** 的方案。

### 5、[为什么 Vue3.0 不再使用 defineProperty 实现数据监听](https://www.infoq.cn/article/sPCMAcrdAZQfmLbGJeGr)

Vue 3.0 中，响应式数据部分弃用了 **Object.defineProperty**，使用 **Proxy** 来代替它。本文将主要通过以下方面来分析为什么 Vue 选择弃用 Object.defineProperty。

### 6、[前端领域的 Docker 与 Kubernetes](https://juejin.im/post/5dddd15b6fb9a071576dbd7a)

**Docker** 和传统部署方式最大的不同在于，它将不会限制我们使用任何工具，任何语言，任何版本的 runtime，Docker 将我们的应用看成一个只提供网络服务的盒子(也即容器)，**Kubernetes** 则是对这些盒子进行更多自动化的操作，自动创建，自动重启，自动扩容，自动调度，这个过程称之为容器编排。通过本文，读者可以了解到 Docker 的基本原理，Kubernetes 是怎么工作的， 对于前端 Kubernetes 有哪些优势与玩法。

### 7、[阿里巴巴架构师：十问业务中台和我的答案](https://www.infoq.cn/article/PpmvT3eDLxzhHVEVqbmO)

**中台** 概念这几年非常火，特别是阿里、腾讯、百度、京东等互联网公司最近频繁的基于中台调整组织架构，把中台的热度又上升到另一个高度，甚至有这样的声音，90 年代不做 ERP 会死，现在不做中台也会定企业生死。本文是“阿里巴巴业务中台”专题的第一篇，作者希望通过自己在阿里业务中台方法体系建设及项目中的一些经验，为企业在业务中台建设过程提供一些帮助。

### 8、[解读 2019 之架构领域全年盘点](https://www.infoq.cn/article/U3Lr4dtChbximocaSqK5)

2019 年，整个 IT 领域发生了许多深刻而又复杂的变化，InfoQ 策划了 **解读 2019** 年终技术盘点系列文章，希望能够给读者清晰地梳理出 IT 领域技术这一年的发展变化，回顾过去，继续前行。本文是 **架构篇** 年终盘点。

### 9、[浅析基于 Serverless 的前后端一体化框架](https://segmentfault.com/a/1190000019639519)

Serverless 是一种 **无服务器架构** 模式，它无需关心程序运行环境、资源及数量，只需要将精力聚焦到业务逻辑上的技术。基于 Serverless 开发 web 应用，架构师总是试图把传统的解决方案移植到 Serverless 上，虽然可以做到既拥有 Serverless 新技术带来的红利，又能维持住传统开发模式的开发体验。但是，Serverless 技术带来的改变可能不止这些，可能是颠覆整个传统 web 应用开发模式的革命性技术。

## 明星项目

### 1、[react-intersection-observer](https://github.com/researchgate/react-intersection-observer)

**Intersection Observer API** 提供了一种异步观察目标元素与祖先元素或顶级文档 viewport 的交集中的变化的方法。本项目是对该 API 的 react 封装，提供了一种更简单易用，可重用，低消耗的解决方案。

### 2、[umijs/hooks](https://github.com/umijs/hooks)

React Hooks 很好的解决了逻辑复用的问题，同时社区中诞生了一批比较好的 React Hooks 库。**@umijs/hooks** 是面向中台应用场景的 Hooks 库，封装了中台常见场景的逻辑，让中台开发变得超级简单。

## 本周热点

### 1、[Twitter 准备删除不活跃的用户帐户](https://www.bbc.com/news/technology-50567751)

Twitter 将 **删除不活跃超过半年的用户帐户**，还包含因去世而停止发推的用户，想要保留账号的用户必须在 12 月 11 日前进行登录。这是 Twitter 首次大规模的删除不活跃账号，给出的理由是没有登录的用户无法就它更新过的隐私政策表示同意。

### 2、[华为推特飙脏话骂苹果，华为相关人士回应账号被盗](https://www.ithome.com/0/459/954.htm)

有用户曝光了华为移动巴西 Huawei Mobile BR 官方推特帐号出现对 @Apple 飙脏话的推文，不过很快就被删除。据华为相关人士回应称，推特被盗，并不是工作人员发布，已第一时间删除相关内容。

### 3、[网易被裁员工发声：已和网易达成和解 将共渡难关](https://tech.sina.com.cn/i/2019-11-29/doc-iihnzhfz2526360.shtml)

网易与前员工纠纷事件又有最新进展，网易发布公告再次致歉，并表示双方已经达成和解，强调此次事件是对公司的重大警醒，将从严处分各环节责任人。同时，网易被裁员工也对事件进行了回应，他表示，非常感谢所有公众和媒体对他的事给予了巨大的关注与支持。这几天，网易高层几次联系他，当面做了很诚恳的道歉、沟通和慰问。目前，他和网易已经达成了和解：双方一致同意，放下争议，共同去关注眼下最重要的事情。

### 4、[传华为 13 年老员工离职索要赔偿被关押 251 天](https://www.williamlong.info/archives/5902.html?utm_source=dlvr.it&utm_medium=twitter)

11 月 28 日一份刑事赔偿决定书在网上流传，一位华为离职员工李洪元索要 2N 赔偿之后，被华为控告敲诈勒索，于 2018 年 12 月 16 日被拘留，法院认定犯罪事实不清，证据不足，不符合起诉条件，关押 251 天后李洪元重回自由。

### 5、[全球 IPv4 地址正式耗尽](https://www.infoq.cn/article/vpDCmupCW3MEv3L2kx41)

长期以来，全球 **IPv4** 地址耗尽令人担忧，今天这一时刻终于来临。负责英国、欧洲、中东和部分中亚地区互联网资源分配的欧洲网络协调中心（RIPE NCC）宣布，其最后的 IPv4 地址空间储备池在 11 月 25 日 UTC + 1 15:35 完全耗尽，所有 43 亿个 IPv4 地址已分配完毕。这意味着没有更多的 IPv4 地址可以分配给 ISP 和其他大型网络基础设施提供商。

## 最后一提

1、本书主张 **时间不可管理、一切都靠积累**。深信积累的力量，时间就是你的朋友，否则，它就是你的敌人。

-- [《把时间当作朋友》](https://github.com/xiaolai/time-as-a-friend/)

2、如果可以的话，多学一点法律，即使不当律师，了解律师的想法也非常有用。**法学院教的是社会的操作系统**。

-- [HN 读者留言](https://news.ycombinator.com/item?id=21172687)
