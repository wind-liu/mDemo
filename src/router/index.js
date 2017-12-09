import Vue from 'vue'
import Router from 'vue-router'

const index = resolve => require(['../page/index'], resolve);
const Login = resolve => require(['../page/login'], resolve);
const register = resolve => require(['../page/register'], resolve);

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index, meta: {title: 'demo展示'}},
    {path:'/index', redirect:'/'},  // 重定向路由名称
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'},},
    {path:'/register', name:'register', component:register, meta:{title:'注册'}},
    /*children:[
     {path:'register', name:'register', component:register, meta:{title:'注册'}},
     ]*/
  ]
});

