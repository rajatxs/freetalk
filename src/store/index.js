import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    UPDATE_USER_INFO(state, payload) {
      state.user = payload;
    }
  },
  actions: {

  },
  getters: {
    displayName(state) {
      return state.user.displayName;
    },
    email(state) {
      return state.user.email;
    },
    photoURL(state) {
      return state.user.photoURL;
    }
  }
})