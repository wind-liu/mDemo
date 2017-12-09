'use strict';

// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
var models = require('./db');
var express = require('express');
var router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/
router.all("*", function (req, res, next) {
  next();
});
// 创建账号接口
router.post('/api/login/createAccount', function (req, res) {
  // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
  var newAccount = new models.Login({
    account: req.body.account,
    password: req.body.password
  });
  // 保存数据newAccount数据进mongoDB
  newAccount.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send('createAccount successed');
    }
  });
});
// 获取已有账号接口
router.get('/api/login/getAccount', function (req, res) {
  // 通过模型去查找数据库
  models.Login.find(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
//# sourceMappingURL=api.js.map