import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import { auth } from './firebase-init'

Vue.use(VueRouter);

Vue.config.productionTip = true;

auth.onAuthStateChanged((user) => {
  if (user) {
    if (router.currentRoute.path === '/auth')
      router.replace("/");
  } else {
    router.replace('/auth');
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');