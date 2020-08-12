<template>
  <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn text medium @click="nav('Home')">Home</v-btn>
      <v-btn text medium target="#aboutme">About me</v-btn>
      <v-btn text medium @click="nav('Projects')">Projects</v-btn>
      <v-spacer></v-spacer>
      <div class="slc">
          <v-select
          :items="languages"
          label="Language"
          outlined
        ></v-select>
        
      </div>
    </v-app-bar>
</template>

<script>
import router from '../router/index'
export default {
    name: 'Bar',
    data: () => ({
     languages: ['Spanish', 'English']
    }),
    methods: {
      nav(name){
        router.push({name: name}).catch((reason) => {})
      }
    }
}
</script>

<style>
.slc{
    max-width: 160px;
    margin-top: 32px;
}
</style>