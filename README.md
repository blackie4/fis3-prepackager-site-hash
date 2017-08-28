fis3-prepackager-site-hash
=====================

fis3 文件中获取站点所有文件内容总和的hash值

## 安装

```html
  npm install fis3-prepackager-site-hash --save
```

## 使用方法

### 配置

```js
fis.match('::package', {
  prepackager: fis.plugin('site-hash')
})
```

### 文件中使用

```js
var thisFileHash = '__siteHash__';
```



