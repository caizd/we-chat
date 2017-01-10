// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ChatInfo from './components/ChatInfo'
import GroupInfo from './components/GroupInfo'
import VueRouter from 'vue-router'
import Login from './components/Login'
import App from './App'
import '../static/css/barrager.css'

Vue.use(VueRouter)
// let router = new VueRouter()
// routerMap(router)

const routes = [
  {
    path: '/chatInfo',
    component: ChatInfo
  },
  {
    path: '/',
    component: Login
  },
  {
    path: '/groupInfo',
    component: GroupInfo
  }
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  ...App
})
app.$mount('#app')
