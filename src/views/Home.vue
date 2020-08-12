<template>
  <div class="home">
    <v-banner>
      <div class="content-about">
        <v-container 
        fluid
        style="min-height: 100px;">
          <v-img src="@/assets/images/first.svg" max-height="480" max-width="500" aspect-ratio="1.21"></v-img>
        </v-container>
          <v-row
            class="mt-8"
          >
            <v-col class="text-center" cols="12">
              <h1 class="display-1 font-weight-thin mb-2">Who Am I?</h1>
              <h4 class="subheading">Quisque a molestie odio. Suspendisse ullamcorper augue nec consequat placerat. Nullam eu ipsum vestibulum, condimentum massa ac, ullamcorper augue. Ut in nisi id mauris tincidunt euismod in eget purus. Donec luctus, orci non sodales placerat, nibh nisl porttitor nunc, eget dictum tellus mi tristique lorem. Quisque et turpis imperdiet, pharetra metus eget, feugiat justo. Praesent tempor, tellus mollis sodales vestibulum, neque justo accumsan erat, at bibendum velit risus at eros. Fusce ut dapibus orci. Mauris leo purus, viverra vel nisi ut, consectetur euismod ipsum. Nunc eros lorem, consectetur quis pretium vel, venenatis ut nisi. Proin fringilla convallis consectetur. Vestibulum luctus lectus turpis, vel finibus risus convallis vulputate. Vivamus at leo efficitur, eleifend ligula aliquam, fermentum sem. Curabitur erat massa, fringilla a lectus sed, fermentum elementum felis.</h4>
              <h4 class="subheading">Quisque a molestie odio. Suspendisse ullamcorper augue nec consequat placerat. Nullam eu ipsum vestibulum, condimentum massa ac, ullamcorper augue. Ut in nisi id mauris tincidunt euismod in eget purus. Donec luctus, orci non sodales placerat, nibh nisl porttitor nunc, eget dictum tellus mi tristique lorem. Quisque et turpis imperdiet, pharetra metus eget, feugiat justo. Praesent tempor, tellus mollis sodales vestibulum, neque justo accumsan erat, at bibendum velit risus at eros. Fusce ut dapibus orci. Mauris leo purus, viverra vel nisi ut, consectetur euismod ipsum. Nunc eros lorem, consectetur quis pretium vel, venenatis ut nisi. Proin fringilla convallis consectetur. Vestibulum luctus lectus turpis, vel finibus risus convallis vulputate. Vivamus at leo efficitur, eleifend ligula aliquam, fermentum sem. Curabitur erat massa, fringilla a lectus sed, fermentum elementum felis.</h4>
            </v-col>
            
          </v-row>
        
      </div>
    </v-banner>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    
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
