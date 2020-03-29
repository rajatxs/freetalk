import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    colorScheme: 'primary'
  },
  mutations: {
    UPDATE_USER_INFO(state, payload) {
      state.user = payload;
    },
    CHANGE_COLOR_SCHEME(state, payload) {
      state.colorScheme = payload;
    }
  },
  actions: {
    updateColorScheme({ commit, state }, colorname = 'primary') {
      const avail = ['primary', 'indigo', 'pink'];
      const oldscheme = `${state.colorScheme}-scheme`;
      const newscheme = avail.includes(colorname)? `${colorname}-scheme`: 'primary-scheme';
      document.body.classList.replace(oldscheme, newscheme);
      commit('CHANGE_COLOR_SCHEME', newscheme);
    }
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