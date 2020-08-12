import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    year: '2020',
    language: 'es', //that's per default
    languageDictionary: new Map()
  },
  mutations: {
    addToLang(state, {name, val}){
      state.languageDictionary.set(name, val);
    },
    removeAllLangData(state){
      state.languageDictionary.clear();
    }
  },
  actions: {
  },
  modules: {
  }
})
