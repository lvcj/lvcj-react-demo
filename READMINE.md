1. clone
1. git checkout -t origin/dev
1. yarn // Please use **yarn**, not `npm`
1. npm start

## 规范

> 我们统一使用`vscode`开发，如果您使用其它编辑器或者 IDE，请自行处理配置，以便和团队人员保持一致。

### 统一格式化

1. [下载 `vscode`](https://code.visualstudio.com/)
1. 全局安装 prettier
   > npm i -g prettier
1. 安装 "Prettier - Code Formatter" 插件   （shift+command+X）
1. 在 vscode 中设置 "editor.formatOnSave": true，这样每次保存时都可以帮我们自动格式化

### git 提交说明

commit message 应该清晰明了, 说明本次提交的目的。

> commit message 其实类似于代码中的注释，方便后面的同学查找、学习、Review 及寻求出现过的解决方案之用。
> 简洁、清晰的提交说明很是重要。

> 比如您加了一个**写草稿的功能**，然后您又**改了一个闪屏的 bug**。在这种情况下，把两个功能分开提交会是一个不错的主意。<br />
> 绝（请）不要把不相关的功能变更提到一个 commit 里。<br />
> 杂糅的提交，一个最直观的问题是，我们不知道该如何写 commit message（因为做了很多操作，不容易描述清楚），有人犯懒的话可能直接只描述了其中的一个变更。<br />
> 这样其实就丢失了解决方案的可复用性。 <br />
> 试想，假如半年之后，又出现了**闪屏**的 bug，开发同学可以从 git history 看到之前已经有人解决过，就可以从之前的解决方案中得到一些灵感。<br />

> 提交时，请加上以下的几种类型：

```
[feat]       添加了新功能
[refactor]   重构
[test]       测试
[fix]        修复了某个bug
[perf]       性能方面的优化
[chore]      构建过程、打包、或辅助工具的变动
[style]      修改了样式
[typo]       手误
[docs]       文档
[localize]   多语言等
```

### 选用的库

组件库：antd-mobile
日期库：date-fns
数据处理库：lodash / ramda | ramda-adjunct

样式库：emotion
