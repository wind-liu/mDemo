import Vue from 'vue'
import Axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'


Vue.use(ElementUI);
Vue.use(Axios);


Vue.config.productionTip = false

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});*/

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
