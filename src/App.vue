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
  beforeCreate(){
    let lgStored = localStorage.getItem('lang')
    if(!lgStored){
      localStorage.setItem('lang', 'es');
      lgStored = 'es';
    }
    this.$store.commit('setLanguage', lgStored);
    this.$store.commit('remapLang');
  }
};
</script>
