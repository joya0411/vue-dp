'use strict'
require('./check-versions')()

const config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const proxyMiddleware = require('http-proxy-middleware')
const webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable

const app = express()
const apiRouters = express.Router()
const compiler = webpack(webpackConfig)

const czth = require('../src/mock/home/czth.json')
const ttlj = require('../src/mock/home/ttlj.json')
const cnxh = require('../src/mock/home/cnxh.json')

const detailInfo = require('../src/mock/detail/info.json')
const detailComment = require('../src/mock/detail/comment.json')

const searchList = require('../src/mock/search/list.json')

const orderList = require('../src/mock/user/orderList.json')

// 超值特惠
apiRouters.post('/api/czth', function (req, res) {
  res.send(czth)
})
// 天天立减
apiRouters.post('/api/ttlj', function (req, res) {
  res.send(ttlj)
})
// 猜你喜欢
apiRouters.post('/api/cnxh/:cityName/:page', function (req, res) {
  res.send(cnxh)
})
// 商户详情--详情
apiRouters.post('/api/detail/info/:shopId', function (req, res) {
  res.send(detailInfo)
})
// 商户详情--评论
apiRouters.post('/api/detail/comment/:shopId/:page', function (req, res) {
  res.send(detailComment)
})
// 搜索列表
apiRouters.post('/api/search/list/:page/:cityName/:category/(:keyword)?', function (req, res) {
  res.send(searchList)
})
// 用户订单
apiRouters.post('/api/orderList/:username', function (req, res) {
  res.send(orderList)
})

// 提交评价
apiRouters.post('/api/submitComment', function (req, res) {
  res.send({
    msg: 'ok'
  })
})

app.use(apiRouters)


const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
// currently disabled until this is resolved:
// https://github.com/jantimon/html-webpack-plugin/issues/680
// compiler.plugin('compilation', function (compilation) {
//   compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
//     hotMiddleware.publish({ action: 'reload' })
//     cb()
//   })
// })

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  let options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

const uri = 'http://localhost:' + port

var _resolve
var _reject
var readyPromise = new Promise((resolve, reject) => {
  _resolve = resolve
  _reject = reject
})

var server
var portfinder = require('portfinder')
portfinder.basePort = port

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  portfinder.getPort((err, port) => {
    if (err) {
      _reject(err)
    }
    process.env.PORT = port
    var uri = 'http://localhost:' + port
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      opn(uri)
    }
    server = app.listen(port)
    _resolve()
  })
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
