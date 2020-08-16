<template>
    <v-container fluid class="mb-16">
        <v-row dense class="fill-height mb-16">
            <v-col cols="12" class="child-flex mb-4">
                <h2 class="text-center">TITLE</h2>
                 <v-card max-height="300" class="d-flex">
                    <v-img
                    src="https://picsum.photos/1600"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    aspect-ratio="1"
                    width="100%"
                    height="450px"
                    
                    >
                    <v-card-title v-text="'Description'"></v-card-title>
                    <p class="text-right">Technologys: </p>
                    <!-- VER ESTO: https://codepen.io/Arredatore/pen/QaBraO -->
                    <div class="text-center">
                        <v-btn class="white--text" text small>SEE DEMO</v-btn>
                    </div>
                    
                    </v-img>
                 </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>