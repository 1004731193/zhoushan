import Vue from 'vue'
import VueRouter from 'vue-router'
import Parent from '../views/Parent.vue'
import lwdBanner from '../views/lwd/sale.vue'
import lwdDetails from '../views/lwd/details.vue'
import lwdCollapse from '../views/lwd/collapse.vue'
import lwdTicket from '../views/lwd/ticket.vue'
import wLogin from '../views/WVue/login.vue'
import wReg from '../views/WVue/reglist.vue'
import wChat from '../views/WVue/chat.vue'
import zDetails from '../views/zlh/details.vue'
import zPro from '../views/zlh/problems.vue'
import select from '../views/jiong/select.vue'
import pay from '../views/jiong/pay.vue'

Vue.use(VueRouter)

const routes = [
  {path:'/',component:Parent},
  {path:'/Parent',component:Parent},
  {path:'/lwdBanner',component:lwdBanner},
  {path:'/lwdDetails',component:lwdDetails},
  {path:'/lwdCollapse',component:lwdCollapse},
  {path:'/lwdTicket',component:lwdTicket},
  {path:'/wLogin',component:wLogin},
  {path:'/wReg',component:wReg},
  {path:'/wChat',component:wChat},
  {path:'/zDetails',component:zDetails},
  {path:'/zPro',component:zPro},
  {path:'/select',component:select},
  {path:'/pay',component:pay},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
