# @zhaohui18755177994/cli

学习如何从零开始搭建一个工程样板。

## 参考

- [开发一个适用于 nodejs 与浏览器的 npm 包 - 基于 rollupjs](https://juejin.cn/post/6844903834402160647#heading-16)

## 功能

- 支持 ES6 及以上 JavaScript 语法
- 可以同时运行在浏览器和 nodejs 中
- 内置文档自动生成、代码检查、测试功能

## 开发步骤

你需要安装 [Node.js][nodejs] 的版本为 10+ (本人开发是版本号为 12.19.0)

克隆此仓库后运行:

```bash
# 安装依赖
$ npm install

# 构建开发环境，监听 /src 文件变化
$ npm run dev

# 构建用于生产用的压缩代码
$ npm run build

# 生成文档
$ npm run build:doc
```

在 package.json 文件的 scripts 部分还有一些其他脚本可用.

## 版本发布

```bash
# 更新版本，内置代码检查
$ npm version <newversion|major|minor|patch>

# 发布包，内置代码构建
$ npm publish
```

查看 [npm 文档](https://docs.npmjs.com/) 了解更多