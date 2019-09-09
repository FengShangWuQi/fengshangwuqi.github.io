<h1 align="center">
Taskbook
</h1>

<h4 align="center">
在终端友好地管理你的笔记或任务
</h4>

### 使用

```
$ sudo npm link
$ tb                                    按看板排序展示所有任务和笔记
$ tb add -t xx                          添加 xx 任务到 @TODO 看板
$ tb add -n yy                          添加 yy 笔记到 @TODO 看板
$ tb add -b weekly -t "a post"          添加 a post 任务到 @weekly 看板
$ tb u 1 -m zz -b cc -s 1               更新 ID 为 1 的任务，任务描述为 zz，任务看板为 @CC，任务状态为已完成
$ tb rm 1                               删除 ID 为 1 的任务
```

### 特性

- 在周末展示 items 时会自动删除本周已完成的 Items；
- board 默认为 @TODO，如果设置为 @DAILY 或 @WEEKLY，会在第二天或第二周展示 items 时自动清除已完成的状态；
