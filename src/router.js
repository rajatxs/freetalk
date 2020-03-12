
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './views/Home'
import Auth from './views/Auth'
import Settings from './views/Settings'
import Chats from './views/Chats'
import Peoples from './views/Peoples'

Vue.use(VueRouter);

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
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/chats',
    name: 'chats',
    component: Chats
  },
  {
    path: '/peoples',
    name: 'peoples',
    component: Peoples
  }
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
