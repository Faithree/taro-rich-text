# 基于 Taro 的多端 UI 库示范用例

> 通过 Taro 提供的多端 UI 库打包能力，可以打包出一个多端运行的 UI 库，目前已经支持 微信/支付宝/百度小程序以及 H5，RN 端的支持还在调研中

## 多端 UI 库项目结构

多端 UI 库的项目目录结构与普通 Taro 项目基本一致，不同点如下

#### 增加一个 UI 库入口文件

需要在 `src` 目录下添加 `index.js` 或者 `index.ts` 来作为 UI 库的入口文件，用于输出 UI 组件，如果有多个 UI 组件，可以如下书写

```javascript
export { default as A } from './components/A/A'
export { default as B } from './components/B/B'
```

这样的话，这个组件库使用起来，会是如下的方式

```javascript
import { A } from 'taro-rich-text'

<A />
```

如果只有 UI 组件，也可以如下书写

```javascript
import A from './components/A/A'

export default A
```

这样的话，这个组件库使用起来，会是如下的方式

```javascript
import A from 'taro-rich-text'

<A />
```
