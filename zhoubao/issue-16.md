---
title: 周报#16 @ 隐身模式、ts-unused-exports、baseweb
tags:
  - Front-End
date: 2021-08-15
cover: images/issue-16.jpeg
---

## 前端动态

### 1、[从前端视角看浏览器隐身模式](https://king-hcj.github.io/2021/08/08/Incognito-Mode/)

隐私模式将保护你的隐私免受使用你计算机的其他人的侵害，并减少你在访问网站时透露的一些有关你自己的信息，但是隐私浏览不会让你匿名，也不会保护你免受监视和大型技术窥探。

### 2、[如何在大型代码仓库中删掉 6w 行废弃的文件和 exports？](https://juejin.cn/post/6995371411019710500)

很多项目历史悠久，其中很多文件或是 export 出去的变量已经不再使用，非常影响维护迭代，本文先讲如何删除废弃的 exports，后讲如何删除废弃文件。

### 3、[Axios 中的参数为啥没被完全编码](https://blog.csdn.net/P6P7qsW6ua47A2Sb/article/details/119465740)

一个接口参数中有未编码中括号（'['、']'），是 url 特殊字符，但在发这个 Get 请求时参数未完全被编码。

### 4、[亲手带你写个简易版的 Vue](https://juejin.cn/post/6992018709439053837)

在一次培训的过程中，尤雨溪带领大家写了一个非常微型的 Vue3。

### 5、[从过去到现在，聊聊 Tree-shaking 是什么？](https://segmentfault.com/a/1190000040476979)

既然有了 DCE 这一术语，为什么又要造一个 Tree-shaking 术语？

### 6、[Vue 3.2 Released](https://blog.vuejs.org/posts/vue-3.2.html)

SFC；Web Components；性能优化；服务端渲染；Effect Scope API。

### 7、[Dark Mode in One Line of Code](https://davidwalsh.name/dark-mode-invert-filter)

一行代码实现 Dark Mode。

### 8、[记一次破解前端加密详细过程](https://blog.csdn.net/lsh19950928/article/details/81585881)

前端加密还是能够破解出来的，关键在于锁定 JS 加密源码位置，并且提取出有用的加密代码。

## 明星项目

### 1、[uber/baseweb](https://github.com/uber/baseweb)

Uber React 实现的设计系统，包含现代化，响应式组件。

### 2、[octokit/octokit.js](https://github.com/octokit/octokit.js)

GitHub SDK，适用于 Browsers, Node.js 和 Deno。

## 本周热点

### 1、[GitHub 废除基于密码的 Git 身份验证](https://github.blog/changelog/2021-08-12-git-password-authentication-is-shutting-down/)

GitHub 正式废除了基于密码的 Git 身份验证，而使用令牌代替。
