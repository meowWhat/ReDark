# ReDark

> 一个 react 驱动 UI 组件库。 帮助你快速开发前端界面。

前往官网 [http://jiahao.site/](http://jiahao.site/) 获取 DOCS

## Getting Started 使用指南

### Prerequisites 项目使用条件

请确保你的电脑安装过 Node.js 并且 Node.js 的版本大于 8.

### Installation 安装

```bash
# 安装
yarn global add redark-cli # 或者：npm install -g redark-cli

# 使用cli创建项目
redark-cli create  demo

# 安装项目依赖
cd ./demo  &&  yarn

# 开启服务器 ,看见hello world
yarn start
```

### Usage example 使用示例

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
// 导入 redark
import { Button } from '@rd'

// 使用
ReactDOM.render(<Button>Hello World</Button>, document.querySelector('#root'))
```

## Deployment 部署方法

```bash

yarn build

```

## License 授权协议

这个项目 MIT 协议， 请点击 [LICENSE.md](LICENSE.md) 了解更多细节。
