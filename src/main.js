import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { auth } from './firebase-init'

Vue.config.productionTip = true;

auth.onAuthStateChanged((user) => {
  if (user) {
    const { 
        displayName, 
        email, 
        emailVerified,
        phoneNumber,
        photoURL } = user;

    store.commit('UPDATE_USER_INFO', {
      displayName, email, emailVerified, phoneNumber, photoURL
    });
    if (router.currentRoute.path === '/auth')
      router.replace("/");
  } else {
    router.replace('/auth');
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');