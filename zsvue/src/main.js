import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'


Vue.use(Vant);

import axios from "axios"
// import Qs from "qs"

//7:配置访问服务器基础地址
axios.defaults.baseURL="http://127.0.0.1:5050/"
//8:配置发送请求保存session信息
axios.defaults.withCredentials=true;
//9:将axios注册vue
Vue.prototype.axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
