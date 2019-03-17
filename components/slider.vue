<template>
  <carousel
    :autoplay=true
    :loop=true
    :autoplay-timeout=5000
    :per-page-custom=[[100,1],[680,2],[1024,3]]
    pagination-active-color=#2196f3
    class="carousel"
  >
    <slide v-for="(item,i) in items">
      <div class="card" :key=i>
        <v-img :src=item.src class="card-img" :elevation=12 ></v-img>
        <p class="card-title">{{item.title}}</p>
        <v-card class="carousel-card text-xs-center">
          <v-card-title class="card-description">{{item.description}}</v-card-title>
        </v-card>
      </div>
    </slide>
  </carousel>
</template>

<script>
  import Carousel from 'vue-carousel/src/Carousel.vue'
  import Slide from 'vue-carousel/src/Slide.vue'
  export default {
    components: {
      Carousel,
      Slide
    },
    data(){
      return{
        items:[
          {
            title:"Portfolio",
            description:"Nuxt.js + Firebaseで作成したPortfolioサイトです。自分で作成したなにかをいろいろとのっけていきます。",
            src:require("@/assets/img/スクリーンショット 2019-03-17 22.36.08.png")
          },
          {
            title:"red",
            description:"Nuxt.js + Firebaseで作成したPortfolioサイトです。",
            src:require("@/assets/img/hannah-reding-1437499-unsplash.jpg")
          },
          {
            title:"white",
            description:"Nuxt.js + Firebaseで作成したPortfolioサイトです。",
            src:require("@/assets/img/xuke123-1438314-unsplash.jpg")
          },
          {
            title:"white",
            description:"Nuxt.js + Firebaseで作成したPortfolioサイトです。",
            src:require("@/assets/img/スクリーンショット 2019-03-17 22.36.08.png")
          },
        ]
      }
    }
  }
</script>

<style>
  .VueCarousel.carousel{
    bottom:35em;
    justify-content: center;
  }
  .VueCarousel-slide{
    padding: 3em;
    position: relative;
    margin:0px ;
    justify-content: center;
    align-items: center;
    z-index:3;
  }
  .carousel-card{
    height:14rem;
    position: relative;
    transition:all 1s ease;
  }
  .card:hover > .card-img{
      width: 100%;
      transition:width 0.5s linear;
  }
  .card:hover > .carousel-card{
     transform: translate(0,3.5em)
   }
  .card:hover > .carousel-card > .card-description{
    display: block;
  }
  .card-description{
    transition:width 0.7s ease;
    display: none;
    width: 100%;
    margin: auto;
    text-align: center;
    position: absolute;
    bottom:0.5em;
  }
  .card-img{
    border-radius: 10px;
    transition:all 0.5s ease;
    position: relative;
    top:13em;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    z-index: 10;
    margin: auto;
    width:90%;
    max-height:210px;
  }
  .card-title{
    z-index: 10;
    width: 100%;
    text-align: center;
    position: relative;
    color: black;
    bottom:-14em;
  }
  .card-img:hover{
    width: 100%;
  }

</style>
