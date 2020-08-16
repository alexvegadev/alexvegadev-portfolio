<template>
  <div class="home">
    <section name="aboutme">
      <AboutMe />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AboutMe from '../components/AboutMe'

export default {
  name: 'Home',
  components: {
    AboutMe
  },
  computed: {
    ...mapState(['languageDictionary'])
  },
  mounted(){
    
  }
}
</script>
<style scoped>
.content-about{
  display: flex;
}
.content-text{
  justify-content: flex-start;
}
</style>
