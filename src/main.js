import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home'
import Auth from './views/Auth'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

Vue.config.productionTip = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
