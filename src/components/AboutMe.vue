<template>
  <div class="aboutme">
      <v-banner>
      <v-card
        class="d-flex"
        flat
        tile>
        <v-card
          class="d-flex row"
          flat
          tile
        >
          <v-container fluid
        style="min-height:200px; min-width: 250px; height: 100%; width: 100%;">
            <v-img src="@/assets/images/first.svg" max-height="100%" max-width="80%" aspect-ratio="1.18"></v-img>
            
          </v-container>
          
        </v-card>
        <v-card
          class="d-flex flex-column mr-15"
          flat
          tile
        >
          <h1 class="text-center display-1 font-weight-thin mb-2">{{languageDictionary['whoamiLabel']}}</h1>
          <h4 class="subheading">{{languageDictionary['whoami']}}</h4>
        </v-card>
      </v-card>
    </v-banner>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'AboutMe',
  computed: {
    ...mapState(['languageDictionary'])
  },
  data: () => ({}),
}
</script>

<style>

</style>