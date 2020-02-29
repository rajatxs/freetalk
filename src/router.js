
import VueRouter from 'vue-router'

import Home from './views/Home'
import Auth from './views/Auth'
import Settings from './views/Settings'
import Chats from './views/Chats'
import Userprofile from './views/Userprofile'

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
    path: '/user',
    name: 'userprofile',
    component: Userprofile
  }
];

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
