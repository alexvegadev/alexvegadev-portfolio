<template>
  <v-app>
    <Bar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Bar from './components/Bar';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Bar,
    Footer
  },

  data: () => ({
    lang: null
  }),
  beforeCreate(){
    const lgStored = localStorage.getItem('lang')
    const mappedData = require('@/assets/data/lang/'+(!lgStored ? 'es' : lgStored)+'.json')
    for(const val in mappedData.dictionary){
      this.$store.state.languageDictionary.set(val, mappedData.dictionary[val])
    }
  }
};
</script>
