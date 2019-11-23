<h1 align="center">
Taskbook
</h1>

<h4 align="center">
在终端友好地管理你的 notes 和 tasks
</h4>

### 使用

```
$ sudo npm link
$ tb                                    按看板排序展示所有 notes 和 tasks
$ tb add -t xx                          添加 xx task 到 @TODO 看板
$ tb add -n yy                          添加 yy note 到 @TODO 看板
$ tb add -b daily -t "a post"           添加 a post task 到 @daily 看板
$ tb u 1 -m zz -b cc -s 1               更新 ID 为 1 的 task，task 描述为 zz，task 看板为 @CC，task 状态为已完成
$ tb rm 1                               删除 ID 为 1 的 task
```

### 特性

- board 默认为 @TODO，如果设置为 @DAILY，会在第二天展示 items 时自动清除已完成的状态；
