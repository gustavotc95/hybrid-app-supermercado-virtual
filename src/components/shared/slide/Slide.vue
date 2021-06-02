<template>
  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide" v-for="(slide, index) in slideImages" :key="index">
      <router-link :to="{name: slide.router}">
        <img :src="slide.img" :alt="slide.alt">
      </router-link>
    </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {

  data () {
    return {
      slideImages: [
        {
          'img': require(`../../../assets/img/slide/slide1.png`),
          'alt': 'slide 1',
          'router': 'Home'
        },
        {
          'img': require(`../../../assets/img/slide/slide2.png`),
          'alt': 'slide 1',
          'router': 'cadastro'
        }
      ]
    }
  },

  mounted () {
    this.swiperStart = new Swiper('.swiper-container', {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: true
      },
      speed: 1000
    })
  }
}
</script>
