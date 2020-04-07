<h1 align="center">
appkit
</h1>

### 安装

```
$ npm install @fengshangwuqi/appkit -g
```

### 使用

```json
{
  "appkit": {
    "dev": "gatsby develop -o",
    "build": "npm run clean && gatsby build --prefix-paths",
    "release": "gh-pages -d public -b master"
  },
  "scripts": {
    "start": "appkit dev appName"
  }
}
```

或者

```
$ appkit release appName
```
