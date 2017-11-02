const config = require('./config/index')
const express = require('express')
const app = express()
const apiRouters = express.Router();

const czth = require('./src/mock/home/czth.json')
const ttlj = require('./src/mock/home/ttlj.json')
const cnxh = require('./src/mock/home/cnxh.json')

const detailInfo = require('./src/mock/detail/info.json')
const detailComment = require('./src/mock/detail/comment.json')

const searchList = require('./src/mock/search/list.json')

const orderList = require('./src/mock/user/orderList.json')

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
app.use(express.static('./dist'))

var port = process.env.PORT || config.build.port

app.listen(port, function (err) {
  if (err) {
    console.log(err)
  }
  console.log('Listening at http://localhost:' + port + '\n')
})