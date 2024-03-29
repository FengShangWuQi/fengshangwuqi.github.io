---
title: 周报#03 @ React Conf 2019、函数式组件优化、cssdb
tags:
  - Front-End
date: 2019-11-24
cover: images/issue-03.jpg
---

## 前端动态

### 1、[精读《React Conf 2019 - Day2》](https://zhuanlan.zhihu.com/p/92309268)

> We not only react code, but react the world.

第二天的内容非常全面，涉及了 React API、开发者周边、codemod 工具、代码维护、写作/音乐与代码、动画、函数式编程、看似简单的 React 组件、使用 React 制作的各种脑洞大开的项目，等等。React Conf 要展示的是一个完整的 React 世界，第一天提到了 React 是一个桥梁，正因为这个桥梁，连接了各行各业不同的人群以及不同的项目，大家都有一个共同的语言：**React**。

### 2、[谷歌新提案：Web Bundles API 可在脱机状态实现内容分发](https://www.infoq.cn/article/AYBVa707ZJ9hodKu1scW)

在 [2019 年 Chrome 开发者峰会](https://developer.chrome.com/devsummit/) 上，谷歌预览了全新的 **Web Bundles API**。这是一种基础架构 API，开发人员可以通过它以任何格式（电子邮件、FTP 甚至 USB）分发他们的 Web 内容，而内容本身不会有任何改动。这种技术不仅能够以闪电般的速度交付 Web 内容，而且即使用户处于脱机状态，也可以实现点对点内容分发。

### 3、[如何对 React 函数式组件进行优化](https://juejin.im/post/5dd337985188252a1873730f)

在使用类组件的时候，使用的 React 优化 API 主要是：[shouldComponentUpdate](https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate) 和 [PureComponent](https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent)，但是在函数式组件里面没有声明周期也没有类，那如何来做性能优化呢？

### 4、[蚂蚁前端研发最佳实践](https://github.com/sorrycc/blog/issues/90)

本文是 [云谦](https://github.com/sorrycc) 在 2019.11.15 [成都全栈大会](https://web-conf.dev/#2019/) 分享的文字稿，介绍了 **蚂蚁前端研发的最佳实践**，其中云谦提取了三个比较重要的点，每个点都是他们实践和深入思考后的结果，希望能对大家有所启发。

### 5、[Redux 风格指南](https://redux.js.org/style-guide/style-guide)

从 [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/index.html) 获得启发，Redux 有了自己的官方风格指南，列出了官方推荐的模式，实践和方法。

### 6、[从 jQuery 到 Serverless](https://zhuanlan.zhihu.com/p/91212924)

本文先讲述了人人喊打的前端开发三大坑问题：**浏览器兼容性**，**残破的工具链**，**混乱的 js 模块化机制**，然后再沿着历史的时间轴，给大家介绍前端开发的一步步填坑进化的过程，从工具简陋，代码粗糙的前端开发石器时代到工具完备，框架层出，效率提升的 **serverless** 时代。

### 7、[如何回答性能优化的问题，才能打动阿里面试官](https://yq.aliyun.com/articles/727675)

日常工作中，我们多少都会遇到应用的性能问题。在阿里面试中，**性能优化** 也是常被问到的题目，用来考察是否有实际的线上问题处理经验。面对这类问题，阿里工程师齐光给出了详细流程。

### 8、[为什么 VS Code 会迅速占领 JavaScript 开发者社区](https://www.infoq.cn/article/0dmxg9Oo1UCRGhZ2g_cy)

VS Code 的流行并非偶然。内置 **源码控制管理**、集成 **终端**、**调试工具**，并支持 **JavaScript IntelliSense**，这些都让这款编辑器成为 JavaScript 开发者的开发利器。在过去几年中，微软花了很大力气解决 Web 开发方面的问题，特别是提供对 JavaScript 的支持，这让 VS Code 吸引了越来越多的用户，从而让 VS Code 的发展处在一个良性循环中。

## 明星项目

### 1、[The Size of Space](https://neal.fun/size-of-space/)

一个有意思的可视化介绍宇宙有多大。

### 2、[CSSdb - What’s next for CSS](https://cssdb.org/)

**CSSdb** 展示了 **CSS 特性** 成为标准的进度和状态，可以通过该列表了解一些新特性。

## 本周热点

### 1、[GitHub 的雄心：推出安全实验室，共同保护全球代码](https://www.infoq.cn/article/LKhwgxqVywhGefOs4YB5)

近日，在 GitHub Universe 2019 大会上，GitHub 宣布推出 [安全实验室（Security Lab）](https://securitylab.github.com/)，汇聚安全研究人员查找并修复开源项目中的安全漏洞。为提升 GitHub 生态系统的整体安全性，GitHub 还推出了 **自动化安全更新**，**令牌扫描**，[GitHub 安全公告数据库](https://github.com/advisories)，**GitHub 安全公告** 四大举措，力图从安全研究者到开发者，构建一套完善的安全体系。

### 2、[“马云模拟器”来了，终于不用还花呗](https://lemonjing.com/)

最近一个名叫 [花光比尔盖茨的钱](https://neal.fun/spend) 的网站火了，这个网站假设你拥有 **900 亿美元**，然后你可以用这个虚拟的钱在网站上体验放纵购物的感觉，在上面你可以任意购买火箭、邮轮、豪宅、跑车等奢侈品，还有著名画作《蒙娜丽莎的微笑》。近日，出现了该网站的中国版本 -- [马云模拟器](https://lemonjing.com/)，网站地址含义是“柠檬精”，网站设定马云余额 **2790 亿元**，也提供了很多消费方式，比如购买蒸饺、涪陵榨菜、奶茶、猪肉、口红、茅台、相机、劳力士、兰博基尼、北京四合院等。

### 3、[阿里王坚当选中国工程院院士](https://www.infoq.cn/article/GMiJGZ50O7iN2Q2FUvj4)

中国工程院 2019 年院士增选结果公布，阿里巴巴 **王坚** 当选 **中国工程院院士**。据悉，这是中国工程院开展的第 14 次院士增选和第 13 次外籍院士增选 ，共选举产生 75 位院士。其中，王坚博士当选中国工程院院士，属于工程管理学部。

### 4、[网易裁员，让保安把身患绝症的我赶出公司。我在网易亲身经历的噩梦](https://zhuanlan.zhihu.com/p/93349725)

作者是网易的一名游戏策划。14 年从上海交大毕业后就进入网易工作，5 年里，作者和大部分网易员工一样以“网易人”的称号为傲。直到 18 年底开始传出网易毁约应届生、年前最后一天裁员、威胁员工的消息时，仍不愿相信这是网易的所为，更想不到不久后作者就会在 **身患绝症** 的情况下亲身经历 **逼迫**、**算计**、**监视**、**陷害**、**威胁**，甚至**被保安赶出公司**。

## 最后一提

1、上周 [周报](https://fengshangwuqi.github.io/2019-11-17-zhou-bao/) 留了一个问题，答案是 **undefined**，原因是这行代码发生了两次赋值，第一次赋值 `a = { n: 2 }`，即重新赋值 a，效果是当前上下文中的 a 指向的对象不再是第一行声明语句中的 { n: 1 }，而此时 a.x 中的 a 指向的还是 { n: 1 } 这个对象。原因是
**JavaScript 总是严格按照从左至右的顺序来计算表达式**，所以，首先计算就是 a.x，而此时该表达式中 a 指向的对象是 { n: 1 }，而第二次赋值 `a.x = ...`，即给 { n: 1 } 这个对象添加了一个新属性。如果我们使用

```js
var a = { n: 1 };
ref = a;
a.x = a = { n: 2 };
```

ref.x 打印出来将是 { n: 2 }。

2、[特斯拉发布电动皮卡](https://www.ifanr.com/1284298)
