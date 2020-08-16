<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="primary white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          class="mx-4 white--text"
          icon
          @click="open(icon.url)"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        {{this.$store.state.languageDictionary['footer']}}
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ year }} — <strong>Alex Gabriel Peiretti Vega</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data: () => ({
        year: '2020',
        icons: [
        {icon:'mdi-git', url:'https://github.com/alexvegadev'},
        {icon:'mdi-twitter', url:'https://twitter.com/alexvegadev'},
        {icon:'mdi-linkedin', url:'https://www.linkedin.com/in/alex-gabriel-peiretti-vega-73312a191/'},
        {icon:'mdi-instagram', url:'http://instagram.com/alex.veegaa'},
        ],
    }),
    methods: {
      open: (url) => (window.open(url))
    }
}
</script>

<style>

</style>