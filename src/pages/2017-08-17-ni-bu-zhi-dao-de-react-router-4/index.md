---
title: 你不知道的 React Router 4
original: false
tag: FrontEnd,React Router 4
date: 2017-08-17T17:15:06+08:00
---

<div class="original-info">
  <div className="original-address">
    原文地址：
    <a
      href="https://css-tricks.com/react-router-4/"
      target="_blank"
      rel="noopener noreferrer"
    >
      All About React Router 4
    </a>
  </div>
  <div className="original-auth">作者：James K Nelson</div>
</div>

> 几个月前，**React Router 4** 发布，我能清晰地感觉到来自 Twitter 大家对新版本中其大量的修改的不同声音，诚然，我在学习 React Router 4 的第一天，也是非常痛苦的，但是，这并不是因为看它的 API，而是反复思考使用它的 **模式** 和 **策略**，因为 V4 的变化确实有点大，V3 的功能它都有，除此之外，还增加了一些特性，我不能直接将使用 V3 的心得直接迁移过来，现在，我必须重新审视 **router** 和 **layout components** 之间的关系

本篇文章不是把 **React Router 4** 的 API 再次呈现给读者看，而是简单介绍其中最常用的几个概念，和重点讲解我在实践的过程中发现的比较好的 **模式** 和 **策略**。

开始阅读之前，你得保证对以下概念并不陌生：

- React stateless（Functional） 组件；
- ES6 的 箭头函数和它的隐式返回；
- ES6 的 解构；
- ES6 的 模板字符串；

## 一个全新的 API

React Router 的早期版本是將 router 和 layout components 分开，为了彻底搞清楚 V4 究竟有什么不同，下面我们来写两个简单的 demo，demo 就两个 route，一个 home，一个 user。

**V3**：

```JavaScript
import React from "react";
import { render } from "react-dom";
import { Router, Route, IndexRoute, Link, browserHistory } from "react-router";

const PrimaryLayout = props =>
  <div className="primary-layout">
    <header>Our React Router 3 App</header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
    </ul>
    <main>
      {props.children}
    </main>
  </div>;

const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;

const App = () =>
  <Router history={browserHistory}>
    <Route path="/" component={PrimaryLayout}>
      <IndexRoute component={HomePage} />
      <Route path="/user" component={UsersPage} />
    </Route>
  </Router>;

render(<App />, document.getElementById("root"));
```

> 在这里给大家推荐一个在线 react 编译器 [codesandbox](https://codesandbox.io/)，正所谓，实践是检验真理的唯一标准，这也是一种良好的学习习惯。

上面代码主要包含下面几个关键点， 但在 V4 中都不复存在了：

- 集中式 router；
- 通过 Route 嵌套，实现 Layout 和 page 嵌套；
- Layout 和 page 组件是作为 router 的一部分；

**V4**：

```JavaScript
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const PrimaryLayout = () =>
  <div className="primary-layout">
    <header>Our React Router 4 App</header>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/User">User</Link>
      </li>
    </ul>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" component={UsersPage} />
    </main>
  </div>;

const HomePage = () => <h1>Home Page</h1>;
const UsersPage = () => <h1>User Page</h1>;

const App = () =>
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>;

render(<App />, document.getElementById("root"));
```

> ⚠️ 注意，我们引入的是 **BrowserRouter**，而且是从 **react-router-dom** 引入，不是 react-router。

相信大家一眼就能看出很多变化，首先，V3 中的 router 不在了，在 V3 中，我们是将整个庞大的 router 直接丢给 DOM，而在 V4 中，除了 BrowserRouter， 我们丢给 DOM 的是我们的应用程序本身。

另外，V4 中，我们不再使用 **props.children** 来嵌套组件了，替代的 **Route**，当 route 匹配时，子组件会被渲染到 Route 书写的地方。

## Inclusive Routing

在上面的 demo 中，读者可能注意到 V4 中有 **exact** 这么一个 props，那么，这个 props 有什么用呢？ V3 中的 routing 规则是 **exclusive**，意思就是最终只获取一个 route，而 V4 中的 routes 默认是 **inclusive**，这就意味着多个 Route 可以同时匹配和呈现。

还是使用上面的 demo，如果我们调皮地删除 **exact** 这个 props，那么我们在访问 /user 的时候，Home 和 User 两个 Page 都将被渲染，是不是恍然大明白了。

> 为了更好地理解 V4 的匹配逻辑，可以查看 [path-to-regexp](http://t.cn/RCZlIbF)，就是它决定 routes 是否匹配 URL。

为了演示 **inclusive routing** 的作用，我们新增一个 UserMenu 组件如下。

```JavaScript
const PrimaryLayout = () =>
  <div className="primary-layout">
    <header>
      Our React Router 4 App
      <Route path="/user" component={UsersMenu} />
    </header>
    <main>
      <Route path="/" exact component={HomePage} />
      <Route path="/user" component={UsersPage} />
    </main>
  </div>;
```

现在，当访问 /user 时，两个组价都会被渲染，在 V3 中存在一些模式也可以实现，但其过程却比较复杂，在 V4 中，是不是瞬间感觉轻松了很多。

## Exclusive Routing

如果你只想匹配一个 route，那么你也可以使用 **Switch** 来 exclusive routing。

```JavaScript
const PrimaryLayout = () =>
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/user/add" component={UserAddPage} />
        <Route path="/user" component={UsersPage} />
        <Redirect to="/" />
      </Switch>
    </main>
  </div>;
```

在 **Switch** 中只有一个 Route 会被渲染，另外，我们还是要给 HomePage 所在 Route 添加 **exact**，否则，在访问 /user 或 /user/add 的时候还是会匹配到 /。同理，不知有没同学注意到，我们将 /user/add 放在 /user 前面是保证正确匹配很有策略性的一步，因为，/user/add 会同时匹配 /user 和 /user/add，如果不这么做，大家可以尝试交换它们两个的位置，看下会发生什么。

当然，如果我们给每一个 Route 都添加一个 **exact**，那就不用考虑上面的策略问题了，但至少现在，我们懂的更多。

**Redirect** 组件不用多说，执行浏览器重定向，但它在 **Switch** 中时，Redirect 组件只会在 routes 匹配不成功的情况下渲染，另外，要想了解 Redirect 如何在 **non-switch** 环境下使用，可以参考下面的 Authorized Route。

## "Index Routes" 和 "Not Found"

V4 中也没有 **IndexRoute**，但 Route exact 可以实现相同的功能，或者 Switch 和 Redirect 重定向到默认的有效路径，甚至一个找不到的页面。

## 嵌套布局

接下来，你可能很想知道 V4 中是如何实现嵌套布局的，V4 确实给我们了很多选择，但这并不一定是好事，表面上，嵌套布局微不足道，但选择的空间越大，出现的问题也就可能越多。

现在，我们假设我们要增加两个 user 相关的页面，一个 browse user，一个 user profile，对 product 我们也有相同的需求，实现的方法可能并不少，但有的仔细思考后可能并不会采纳。

第一种，如下修改 PrimaryLayout：

```JavaScript
const PrimaryLayout = props => {
  return (
    <div className="primary-layout">
      <PrimaryHeader />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user" exact component={BrowseUsersPage} />
          <Route path="/user/:userId" component={UserProfilePage} />
          <Route path="/products" exact component={BrowseProductsPage} />
          <Route path="/products/:productId" component={ProductProfilePage} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};
```

虽然这种方法可以实现，但仔细观察下面的两个 user 页面，就会发现有点潜在的问题。

```JavaScript
const BrowseUsersPage = () => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <BrowseUserTable />
    </div>
  </div>
)

const UserProfilePage = props => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <UserProfile userId={props.match.params.userId} />
    </div>
  </div>
)
```

> userId 通过 **props.match.params** 获取，props.match 赋予给了 Route 中的任何组件。除此之外，如果组件不通过 Route 来渲染，要访问 props.match，可以使用 withRouter() 高阶组件来实现。

估计大家都发现了吧，两个 user 页面中都有一个 UserNav，这明显会导致不必要的请求，以上只是一个简单 demo，如果是在真实的项目中，不知道会重复消耗多少的流量，然而，这就是由我们采用以上方式使用路由引起的。

接下来，我们再看看另一种实现方式：

```JavaScript
const PrimaryLayout = props => {
  return (
    <div className="primary-layout">
      <PrimaryHeader />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/user" component={UserSubLayout} />
          <Route path="/products" component={ProductSubLayout} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};
```

我们用 2 个 routes 替换之前的 4 个 routes。

> ⚠️ 注意，这里我们没有再使用 **exact**，因为，我们希望 /user 可以匹配任何以 /user 开始的 route，products 同理。

使用这种策略，子布局也开始承担起了渲染 routes 的职责：

```JavaScript
const UserSubLayout = () =>
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path="/user" exact component={BrowseUsersPage} />
        <Route path="/user/:userId" component={UserProfilePage} />
      </Switch>
    </div>
  </div>;
```

是不是很好解决了第一种方式中的重复渲染等问题呢？

另外，routes 需要识别它的完整路径才能匹配，为了减少我们的重复输入，我们可以使用 **props.match.path** 来代替。

```JavaScript
const UserSubLayout = props =>
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={props.match.path} exact component={BrowseUsersPage} />
        <Route
          path={`${props.match.path}/:userId`}
          component={UserProfilePage}
        />
      </Switch>
    </div>
  </div>;
```

## Match

正如我们上面看到的那样，**props.match** 可以帮我们获取 userId 和 routes。

match 对象为我们提供了 **match.params**，**match.path**，和 **match.url** 等属性。

### match.path VS match.url

最开始，可能觉得这两者并没有什么区别。

```JavaScript
const UserSubLayout = ({ match }) => {
  console.log(match.url)   // output: "/user"
  console.log(match.path)  // output: "/user"
  return (
    <div className="user-sub-layout">
      <aside>
        <UserNav />
      </aside>
      <div className="primary-content">
        <Switch>
          <Route path={match.path} exact component={BrowseUsersPage} />
          <Route path={`${match.path}/:userId`} component={UserProfilePage} />
        </Switch>
      </div>
    </div>
  )
}
```

> match 在组件的参数中被 **解构**，我们可以使用 match.path 代替 props.match.path。

虽然控制台的输出一模一样，但我们需要明白的是：**match.url** 是浏览器 URL 的一部分，**match.path** 是我们 router 书写的路径。

### 如何选择

如果我们是构建 route 路径，那么肯定使用 **match.path**。

为了说明问题，我们创建两个子组件，一个 route 路径来自 **match.url**，一个 route 路径来自 **match.path**。

```JavaScript
const UserComments = ({ match }) =>
  <div>
    UserId: {match.params.userId}
  </div>;

const UserSettings = ({ match }) =>
  <div>
    UserId: {match.params.userId}
  </div>;

const UserProfilePage = ({ match }) =>
  <div>
    User Profile:
    <Route path={`${match.url}/comments`} component={UserComments} />
    <Route path={`${match.path}/settings`} component={UserSettings} />
  </div>;
```

然后，我们按下面方式来访问：

- /user/5/comments
- /user/5/settings

实践后，我们发现，访问 comments 返回的是 undefined，访问 settings 返回的是 5。

正如 API 所述:

- path - (string) The path pattern used to match. Useful for building nested <Route>s
- url - (string) The matched portion of the URL. Useful for building nested <Link>s

## 避免 Match Collisions

假设我们的 App 是一个仪表盘，我们希望访问 /user/add 和 /user/5/edit 添加和编辑 user。使用上面的实例，user/:userId 已经指向 UserProfilePage，我们这是需要在 UserProfilePage 中再添加一层 routes 么？显然不是这样的。

```JavaScript
const UserSubLayou = ({ match }) =>
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route exact path={match.path} component={BrowseUsersPage} />
        <Route path={`${match.path}/add`} component={AddUserPage} />
        <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />
        <Route path={`${match.path}/:userId`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>;
```

现在，看清楚这个策略了么。

另外，我们可以使用 **${match.path}/:userId(\\d+)** 作为 UserProfilePage 对应的 path，保证 :userId 是一个数字，可以避免与 /users/add 的冲突，这样，将其所在的 Route 丢到最前面去也能正常访问 add 页面，这一招，就是我在 [path-to-regexp](http://t.cn/RCZlIbF) 学的。

## Authorized Route

在应用程序中限制未登录的用户访问某些路由是非常常见的，还有对于授权和未授权的用户 UI 也可能大不一样，为了解决这样的需求，我们可以考虑为应用程序设置一个主入口。

```JavaScript
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/auth" component={UnauthorizedLayout} />
            <AuthorizedRoute path="/app" component={PrimaryLayout} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
```

现在，我们首先会去选择应用程序在哪个顶级布局中，比如，/auth/login 和 /auth/forgot-password 肯定在 UnauthorizedLayout 中，另外，当用户登陆时，我们将判断所有的路径都有一个 /app 前缀以确保是否登录。如果用户访问 /app 开头的页面但并没有登录，我们将会重定向到登录页面。

下面就是我写的 AuthorizedRoute 组件，这也是 V4 中一个惊奇的特性，可以为了满足某种需要而书写自己的路由。

```JavaScript
class AuthorizedRoute extends React.Component {
  componentWillMount() {
    getLoggedUser();
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (pending) return <div>Loading...</div>;
          return logged
            ? <Component {...this.props} />
            : <Redirect to="/auth/login" />;
        }}
      />
    );
  }
}

const stateToProps = ({ loggedUserState }) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
});

export default connect(stateToProps)(AuthorizedRoute);
```

点击 [这里](http://t.cn/RC7Sc3s) 可以查看的我的整个 Authentication。

## 总结
React Router 4 相比 V3，变化很大，若是之前的项目使用的 V3，不建议立即升级，但 V4 比 V3 确实存在较大的优势。