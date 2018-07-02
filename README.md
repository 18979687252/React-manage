## ReactManager
-------------------------------------------------------------------------------------------------
> react全家桶后台管理系统

### 项目介绍
------------------------------------------------------------------------------------------------
> 1. 项目构建：create-react-app；
> 2. UI: Ant Design；
> 3. css: less；
> 4. 状态管理：react-redux；
> 5. 异步action中间件：redux-thank；
> 6. action生成：redux-actions；
> 7. 数据请求：axios；
> 8. 路由：react-router-dom;

### Usage
-------------------------------------------------------------------------------------------------
```
   #下载依赖
   npm install

   # 本地运行
   npm start

   # 打包
   npm build || npm run build
```

### 项目结构
------------------------------------------------------------------------------------------------
```
    ├── build.js                   项目打包后的文件
    ├── config                     webpack配置文件
    │   ├──...
    │   ├──webpack.config.dev.js   开发环境配置(启动速度优化)
    │   ├──webpack.config.prod.js  生产环境配置(打包体积优化)
    ├── node_modules               node模块目录
    ├── public
    │   └──index.html
    ├── scripts
    │   ├── build.js               打包项目文件
    │   ├── start.js               启动项目文件
    │   └── test.js                测试项目文件
    ├── src
    │   ├── actions                react-redux中的action
    │   │   ├── account.js
    │   │   ├── login.js
    │   ├── components             封装后的公用组件
    │   ├── container              页面组件容器
    │   ├── reducers               react-redux中的reducer
    │   │    ├── account.js
    │   │    ├── rootReducer.js
    │   ├── router                 路由
    │   ├── static                 静态文件
    │   │   ├── images
    │   │   ├── js
    │   ├── store                  react-redux的store
    │   ├── utils                  工具类
    │       ├── api.js             接口
    │       ├── contant.js         常量、公用函数
    │       ├── http.js            axios的封装
    │       └── interceptor.js     axios拦截器
    │
    │
    ├── .gitignore
    ├── package.json
    ├── README.md
    └── yarn.lock
```