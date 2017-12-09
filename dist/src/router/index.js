'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = function index(resolve) {
  return require(['../page/index'], resolve);
};
var Login = function Login(resolve) {
  return require(['../page/login'], resolve);
};
var register = function register(resolve) {
  return require(['../page/register'], resolve);
};

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{ path: '/', name: 'index', component: index, meta: { title: 'demo展示' } }, { path: '/index', redirect: '/' }, // 重定向路由名称
  { path: '/login', name: 'Login', component: Login, meta: { title: '登录' } }, { path: '/register', name: 'register', component: register, meta: { title: '注册' } }]
});
//# sourceMappingURL=index.js.map