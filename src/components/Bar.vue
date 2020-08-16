<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text medium @click="nav('Home')">{{languageDictionary['btnHome']}}</v-btn>
      <v-btn text medium target="#aboutme">{{languageDictionary['btnAbout']}}</v-btn>
      <v-btn text medium @click="nav('Projects')">{{languageDictionary['btnProjects']}}</v-btn>
      <v-spacer></v-spacer>
      <div class="text-center">
    <v-menu offset-y transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on">
          {{languageDictionary['langLabel']}}
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in languages"
          :key="index"
          @click="lang(item)">
          <v-list-item-title class="selected" v-if="language === item">> {{ item }}</v-list-item-title>
          <v-list-item-title v-else>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
    </v-app-bar>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
import router from '../router/index'
export default {
    name: 'Bar',
    computed:{
      ...mapState(['languageDictionary']),
      language:{
        get(){
          return this.$store.state.language == 'es' ? 'Spanish' : 'English';
        },
        set(newValue){
          const val = newValue == 'Spanish' ? 'es' : 'en';
          this.$store.commit('setLanguage', val)
        }
      }
    },
    data: () => ({
     languages: ['Spanish', 'English'],
    }),
    methods: {
      ...mapMutations(['remapLang']),
      nav(name){
        router.push({name: name}).catch((reason) => {})
      },
      lang(lang){
        this.language = lang;
        localStorage.setItem('lang', this.$store.state.language);
        this.remapLang()
      }
    }
}
</script>

<style>
</style>