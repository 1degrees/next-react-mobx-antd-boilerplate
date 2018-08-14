# next-react-mobx-antd-boilerplate

UI框架方面，集成了 <https://ant.design/index-cn>

# 基础功能

1 next

2 react 

3 mobx 状态管理机，支持多个 stores 文件

4 axios 请求和响应拦截器

5 antd UI应用

6 懒加载

7 css,less,image 加载

8 env多环境配置

# 开发坏境启动

1 npm install

2 npm run dev

3 浏览器打开http://localhost:3000

# 生产坏境部署

1 npm run build

2 npm run start

# 项目目录结构
``` lua
next-react-ssr
├─.next                     ----项目编译目录
├─asserts                   ----项目资源文件目录
├─components                ----项目公用组件目录
├─comUtils                  ----工具类JavaScript
├─config                    ----项目请求路径配置
├─env			            ----环境变量配置
├─pages                     ----路由页面
├─server.js                 ----node服务器启动文件
├─next.config.js            ----next配置文件
└─stores                    ----mobx状态管理库