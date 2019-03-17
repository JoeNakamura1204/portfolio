<template>
  <v-layout
    justify-center
    align-center
    class="body-container"
    white--text
    row wrap
  >
      <v-flex xs8 md7 align-center >
        <v-card color="blue" class="sheet text-xs-center white--text">
          <h1 >My Works</h1>
          <p>select works you like</p>
        </v-card>
      </v-flex>

      <v-flex xs12 align-center class="carousel-container" >
        <slider></slider>
      </v-flex>

  </v-layout>
</template>

<script>
  import slider from '@/components/slider.vue'
  export default {
    components:{
      slider
    },
    data(){
      return{

      }
    }
  }

</script>
<style>
  .body-container{
    background:#f5f5f5;
  }
  .sheet{
    color: white;
    position: relative;
    top: 4em;
    padding-top: 20px;
    height: 35em;
    border-radius: 10px;
    z-index:0.2;
  }
  .carousel-container{
    height: 20px;
  }

</style>
