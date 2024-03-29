---
title: 周报#05 @ 微前端、热更新、creepyface
tags:
  - Front-End
date: 2019-12-08
cover: images/issue-05.jpg
---

## 前端动态

### 1、[微前端的核心价值](https://zhuanlan.zhihu.com/p/95085796)

本文来自对阿里云微前端线下沙龙的整理，观点是 **微前端的核心价值在于 "技术栈无关"，这才是它诞生的理由，或者说这才是能说服大家采用微前端方案的理由**。

### 2、[React Hooks 你真的用对了吗](https://zhuanlan.zhihu.com/p/85969406)

从 **React Hooks** 正式发布到现在，作者一直在项目使用它。但是，在使用 Hooks 的过程中，作者也进入了一些误区，导致写出来的代码隐藏 bug 并且难以维护。本文作者具体分析了这些问题，并总结一些好的实践。

### 3、[正交的 React 组件](https://dmitripavlutin.com/orthogonal-react-components/)

如果 A 和 B 是正交的，则更改 A 不会影响到 B，这就是正交的概念。React 的组件设计遵从 **正交原则**，可以更容易对组件进行更改，增强组件的可读性和更容易对组件进行测试。

### 4、[JavaScript Promises: 9 个问题](https://danlevy.net/javascript-promises-quiz/?s=r)

通过 9 个问题来测验对 **Promises** 的掌握程度。

### 5、[JavaScript 是如何运行的](https://segmentfault.com/a/1190000020438413)

本文带领大家理解 JavaScript 的执行原理，明白为什么说 **JavaScript 是一门解释型的动态语言**。

### 6、[不容错过的 Babel7 知识](https://juejin.im/post/5ddff3abe51d4502d56bd143)

本文的目的是搞明白 **Babel** 的使用和配置，搞清楚 **@babel/runtime**，**@babel/polyfill**，**@babel/plugin-transform-runtime** 这些作用是什么，插件和预设都是用来干什么的，我们为什么需要配置它们。

### 7、[轻松理解 webpack 热更新原理](https://juejin.im/post/5de0cfe46fb9a071665d3df0)

**HMR** 作为一个 Webpack 内置的功能，可以通过 HotModuleReplacementPlugin 或 --hot 开启。那么，HMR 到底是怎么实现热更新的呢？

### 8、[漫画：三种 “奇葩” 的排序算法](https://zhuanlan.zhihu.com/p/95167287)

在算法的世界里，有许多高效率的排序算法，比如快速排序、归并排序、桶排序......它们大大提高了程序的性能。但是，也有一些比较奇葩的排序算法，它们既不能做到高效率，也没有很好的可读性。那它们存在的意义是什么呢？因为有趣呀。本文就介绍了三种“异想天开”的排序算法。

## 明星项目

### 1、[o2sh/onefetch](https://github.com/o2sh/onefetch)

**Onefetch** 是一个命令行工具，可在终端友好显示 Git 仓库的信息，支持近 50 种不同的编程语言。

### 2、[4lejandrito/creepyface](https://creepyface.io)

**creepyface** 是一个 JavaScript 库，实现的效果是可以让图片中的面孔随着鼠标而移动。

### 3、[doczjs/docz](https://github.com/doczjs/docz)

**docz** 基于 **Gatsby** 和 **MDX** 实现，让用户书写文档变得从未有过的简单。

### 4、[xindoo/eng-practices-cn](https://xindoo.github.io/eng-practices-cn/)

谷歌工程实践文档。

## 本周热点

### 1、[别让自己“墙”了自己](https://coolshell.cn/articles/20276.html)

本文是一篇带说教的文章，作者认为 **限制自己的往往不是他人，也不是环境，而是自己，希望别自己墙了自己，勇于去摸高**。引用庄子的话说就是：**井蛙不可以语于海者，拘于虚也；夏虫不可以语于冰者，笃于时也；曲士不可以语于道者，束于教也**。

### 2、[丁磊向左，刘强东向右](https://mp.weixin.qq.com/s/V33De7ir-bJ5NfCrxBzP9g)

2019 年是互联网大佬人设开始崩塌的一年。**那些通过自己的拼搏，在时代潮流中抓住风口，赢得关注和尊重的企业家，他们身上的光环正在逐渐褪去**。对于企业而言，大佬还是熟悉的大佬，员工却可能不再是熟悉的员工。丁磊式向左，刘强东式向右，都是在创造商业价值。但无论何时，对员工的尊重和关怀，永远都不该被忽略。

## 最后一提

1、所有可以用 JavaScript 编写的程序，最终都会出现 JavaScript 的版本。

-- [Atwood 定律](https://blog.codinghorror.com/the-principle-of-least-power/)
