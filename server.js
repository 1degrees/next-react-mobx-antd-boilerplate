/*
 * @Author: xiao·Zhang 
 * @Date: 2018-08-09 11:03:25 
 * @Last Modified by: xiao·Zhang
 * @Last Modified time: 2018-09-11 16:17:52
 * @file: node服务器启动文件（路由配置）
 */

const express = require('express');
const next = require('next');
const LRUCache = require('lru-cache');  
const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 8080;

// 缓存设置
const ssrCache = new LRUCache({
  max: 500,                   //缓存最大条数
  maxAge: 1000 * 60 * 60 * 24 // 24hour
})

// 初始化next服务
const app = next({
  dev: (env === 'development')
});
const handle = app.getRequestHandler();
const mobxReact = require('mobx-react');

//避免mobx服务端渲染的内存泄漏问题
mobxReact.useStaticRendering(true);

// 配置node服务端路由
app.prepare().then(() => {
  //初始化node服务器
  const server = express();

  /* 配置静态文件夹 */
  server.use('/static', express.static(__dirname + '/static'));

  /* 服务端路由 */
  server.get('/active/:id', (req, res) => {
    console.log('*******服务端中间层路由********');
    renderAndCache(req, res, '/active', {id: req.params.id });
  })
  
  /* 
   *首屏加载先查找服务端路由->渲染
   *页面二次操作进行路由跳转交由next处理->默认渲染
   *默认路由页面未进行cache处理
   */
  server.get('*', (req, res) => {
    console.log('*******默认交由next处理********');
    return handle(req, res)
  })

  //启动node服务器监听端口
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

/**
 * @function 服务端渲染添加缓存&读取缓存
 * @param { object } req
 * @param { object } res
 * @param { string } pagePath
 * @param { object } queryParams
 */
function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);

  // 存在缓存
  if (ssrCache.has(key)) {
    console.log('-----CACHE-KEY-GET-----', key)
    res.send(ssrCache.get(key))
  }

  // 无缓存，重新渲染
  app.renderToHTML(req, res, pagePath, queryParams)
    .then((html) => {
      // 缓存页面
      console.log('-----CACHE-KEY-SAVE-----', key)
      ssrCache.set(key, html)
      res.send(html)
    })
    .catch((err) => {
      app.renderError(err, req, res, pagePath, queryParams)
    })
}

/**
 * @function 获取缓存key值
 * @param { string } req
 * @returns 
 */
function getCacheKey (req) {
  return `${req.url}`
}