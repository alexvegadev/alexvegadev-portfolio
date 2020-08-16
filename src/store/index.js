import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    year: '2020',
    language: 'es', //that's per default
    languageDictionary: [],
    acronims: new Map(),
    projects: require('@/assets/data/works.json')
  },
  mutations: {
    addToLang(state, {name, val}){
      state.languageDictionary.set(name, val);
    },
    removeAllLangData(state){
      state.languageDictionary.clear();
    },
    setLanguage(state, lang){
      state.language = lang;
    },
    remapLang(state){
      let lgStored = localStorage.getItem('lang')
      const mappedData = require('@/assets/data/lang/'+(!lgStored ? 'es' : lgStored)+'.json')
      state.languageDictionary = mappedData.dictionary;
    }
  },
  actions: {
  },
  modules: {
  }
})
