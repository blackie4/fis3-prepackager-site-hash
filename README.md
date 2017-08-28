fis3-prepackager-site-hash
=====================

[![npm](https://img.shields.io/npm/v/fis3-prepackager-site-hash.svg)](https://www.npmjs.com/package/fis3-prepackager-site-hash)
[![npm](https://img.shields.io/npm/dm/fis3-prepackager-site-hash.svg)](https://www.npmjs.com/package/fis3-prepackager-site-hash)

fis3 文件中获取站点所有静态文件内容总和的md5序列

## 安装

```html
  npm install fis3-prepackager-site-hash --save
```

## 使用方法

### 基础配置

```js
fis.match('::package', {
  prepackager: fis.plugin('site-hash'[, options])  // { length: 7 } 序列长度（默认为7）
})
```

### 文件中使用

```js
var siteHash = '__siteHash__';
```



