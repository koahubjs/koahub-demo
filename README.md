## KoaHub.js demo

#### KoaHub.js

KoaHub.js -- 基于 Koa.js 平台的 Node.js web 快速开发框架。可以直接在项目里使用 ES6/7（Generator Function, Class, Async & Await）等特性，借助 Babel 编译，可稳定运行在 Node.js 环境上。

github地址：http://github.com/einsqing/koahubjs



## demo

#### 下载安装

```javascript
//下载
git clone https://github.com/einsqing/koahubjs-demo
//安装依赖
npm install
//编译
npm run compile
//启动
npm run start
```

#### 浏览器访问

```javascript
http://localhost:3000
//显示
hello koahubjs
```

#### 自定义post／file中间件

```js
// use koa-better-body
koa.use(async function (ctx, next) {

    if (ctx.request.fields) {
        ctx.post = ctx.request.fields;
    }

    if (ctx.request.files) {
        ctx.file = ctx.request.files;
    }

    await next();
});
```

#### 快捷方法中间件

```js
koa.use(async function (ctx, next) {

    if (!global.model && koahub.utils.model) {
        global.model = koahub.utils.model;
    }
  
    await next();
});
```



### 常见问题

1.模版引擎慢

默认模版引擎关闭了缓存，修改模版问题会立即生效。正式环境建议开启缓存，速度将提升10倍。

2.修改代码未生效

修改配置watcher，cluster需要手动重启。

## 官网
[KoaHub.js官网](http://js.koahub.com)

