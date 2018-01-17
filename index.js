var express = require('express')
var app = express()
var cors = require('cors')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var loginMiddleware = require('./loginMiddleware')

app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())

//TODO
app.post('/api/sedmsg/:phone', (req, res) => {
  console.log('Phone is', req.params.phone);

  return res.status(200).json({
    info: 'sending'
  })
})

app.post('/api/loginbyphone', (req, res) => {
  const { phone, code } = req.body
  console.log('phone:', phone)
  console.log('code:', code)
  return res.send({
    token: 'xxx'
  })
})

// 加入购物车
app.post('/api/insertshoppingcat', (req, res) => {
  const { goodsid, goodsnum } = req.body
  console.log('加入购物车 goodsid:', goodsid)
    console.log('加入购物车 goodsnum:', goodsnum)
  return res.json({
    ret: true,
    msg: ''
  })
})

// 查询用户购物车列表
app.get('/api/selectshoppingcatall', (req, res) => {
  console.log('查询用户购物车列表--->GET')
  return res.send([{"id":"7",               //物品id
      "goodsname":"梨子",       //物品名
      "introduce":"好吃",       //描述
      "unitprice":"1",          //单价
      "favorableprice":null,    //优惠价
      "company":"元/斤",        //价格
      "imgpath":"http://oniwvmkkh.bkt.clouddn.com/吉祥语.png",    //小图地址
      "num":"22"                //购物车数量
    },
    {"id":"8",               //物品id
      "goodsname":"梨子",       //物品名
      "introduce":"好吃",       //描述
      "unitprice":"1",          //单价
      "favorableprice":null,    //优惠价
      "company":"元/斤",        //价格
      "imgpath":"http://oniwvmkkh.bkt.clouddn.com/吉祥语.png",    //小图地址
      "num":"20"                //购物车数量
    },
  ])
})

//新增用户收货信息
app.post('/api/insertreceiptinformation', (req, res) => {
  const { consignee, telephone, city, urbanarea, detailedaddress } = req.body
  console.log(`新增用户收货信息 consignee:${consignee} - telephone :${telephone}- city: ${city}- urbanarea: ${urbanarea}- detailedaddress: ${detailedaddress}`)
  return res.send({
    ret: true,
    msg: "ok",
    data: 21112   //距离（公里）
  })
})

// 获取用户收货信息列表
app.get('/api/selectreceiptinformationlist', (req, res) => {
  console.log('')
  return res.send([
   {
    receiptinformationid: '112123', //收货信息id
    consignee: 'more',   //收货人
    telephone:  15252739492,  //联系电话
    city: '无锡市',
    urbanarea: '普陀区',
    detailedaddress: '中南海1001号',
    isdefault: false,//是否为默认地址  1默认地址 2非默认
    distance: 10086//距离公里数
    },
    {
     receiptinformationid: '112123', //收货信息id
     consignee: 'more',   //收货人
     telephone:  15252739492,  //联系电话
     city: '无锡市',
     urbanarea: '普陀区',
     detailedaddress: '中南海1001号',
     isdefault: false,//是否为默认地址  1默认地址 2非默认
     distance: 10086//距离公里数
   },
   {
    receiptinformationid: '112123', //收货信息id
    consignee: 'more',   //收货人
    telephone:  15252739492,  //联系电话
    city: '无锡市',
    urbanarea: '普陀区',
    detailedaddress: '中南海1001号',
    isdefault: true,//是否为默认地址  1默认地址 2非默认
    distance: 10086//距离公里数
   }
  ])
})

//更新用户默认地
app.put('/api/updatadefaultreceiptinformation', (req, res) => {
  const { receiptinformationid } = req.body
  console.log(`更新用户默认地zhi-->receiptinformationid : ${receiptinformationid}`)
  return res.send({
    ret: true
  })
})

// 删除用户收货信息
app.delete('/api/deleteuserreceiptinformation/:id', (req, res) => {
  const { id } = req.params
  console.log(`删除用户地zhi-->id : ${id}`)
  return res.send({
    ret: true
  })
})

// 热门搜索词
app.get('/api/hotsearchwords', (req, res) => {
  console.log('热门搜索词 ===>')
  return res.send([
    {
      id: 1,
      text: '大白菜'
    },
    {
      id: 2,
      text: '萝莉鱼'
    },
    {
      id: 1,
      text: '大白菜'
    },
    {
      id: 2,
      text: '萝莉鱼'
    },
    {
      id: 1,
      text: '大白菜'
    },
    {
      id: 2,
      text: '萝莉鱼'
    },
    {
      id: 1,
      text: '大白菜'
    },
    {
      id: 2,
      text: '萝莉鱼'
    }
  ])
})

// 模糊查询接口
app.get('/api/selectgoodsinfovague', (req, res) => {
  const { element } = req.query
  console.log(`element is ------->${element}`)
  return res.send([{"id":"7",               //物品id
      "goodsname":"梨子",       //物品名
      "introduce":"好吃",       //描述
      "unitprice":"1",          //单价
      "favorableprice":null,    //优惠价
      "company":"元/斤",        //价格
      "imgpath":"http://oniwvmkkh.bkt.clouddn.com/吉祥语.png",    //小图地址
      "num":"22"                //购物车数量
    },
    {"id":"8",               //物品id
      "goodsname":"梨子",       //物品名
      "introduce":"好吃",       //描述
      "unitprice":"1",          //单价
      "favorableprice":null,    //优惠价
      "company":"元/斤",        //价格
      "imgpath":"http://oniwvmkkh.bkt.clouddn.com/吉祥语.png",    //小图地址
      "num":"20"                //购物车数量
    }
  ])
})

app.listen(8888, () => {
  console.log('Run At Port 8888 🌎')
})
