<h1 align="center">
appkit
</h1>

### 安装

```
$ npm install @fengshangwuqi/appkit -g
```

### 使用

1、修改 package.json；

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

2、使用 `.env` 或 `.env.${appName}` 注入环境变量;

3、运行相应脚本;

```
$ appkit release

or

$ appkit release appName
```
