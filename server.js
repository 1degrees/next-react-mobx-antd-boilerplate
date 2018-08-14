'use strict'
const express = require('express');
const next = require('next');

// 加载环境变量-未使用MongoDB暂不使用
// require('dotenv').load();

// node进程异常监听
// process.on('uncaughtException', function(err) {
//   console.error('Uncaught Exception: ', err)
// });

// process.on('unhandledRejection', (reason, p) => {
//   console.error('Unhandled Rejection: Promise:', p, 'Reason:', reason)
// });

const env = process.env.NODE_ENV || 'production';
const port = process.env.PORT || 8080;

// 初始化next服务
const app = next({dev: (env === 'development')});
const handle = app.getRequestHandler();

// 配置node服务端路由
app.prepare().then(() => {
    //初始化node服务器
    const server = express()

    /* 
     * 配置node服务器路由 
     */
    // server.get('/:id', (req, res) => {
    //   const ids = ['p1','p2','p3','p4','p5','p6'];
    //   const id = req.params.id;

    //   if(ids.indexOf(id) != -1){
    //     return app.render(req, res, '/', { id: req.params.id });
    //   } else {
    //     return handle(req, res);
    //   }
    // })

    server.get('/active/:id', (req, res) => {
        return app.render(req, res, '/', { id: req.params.id });
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    /* 
     * 配置node服务器端口
     */
    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })