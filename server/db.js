// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成

// 连接远程数据库
var dbUrl = 'mongodb://localhost:27017/test';
var db = mongoose.connect(dbUrl,{useMongoClient: true});


// 为这次连接绑定事件
const dbConnect = mongoose.connection;
dbConnect.once('error',() => console.log('数据库连接失败'));
dbConnect.once('open',() => console.log('数据库连接成功'));
/************** 定义模式loginSchema **************/
const loginSchema = mongoose.Schema({
  account : String,
  password : String
});

/************** 定义模型Model **************/
const Models = {
  Login : mongoose.model('Login',loginSchema)
};

module.exports = Models;
