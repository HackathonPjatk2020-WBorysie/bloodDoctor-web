import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: "",
    tests: [],
    activePage: 0,
    morfology: null,
    immunology: null,
    biochemy: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
