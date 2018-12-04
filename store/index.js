import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import home from './home'
import board from './board'

Vue.use(Vuex)

export default () =>
  new Vuex.Store({
    //getters: {
    //  router: () => router
    //},
    modules: {
      auth,
      home,
      board,
    },
  })
