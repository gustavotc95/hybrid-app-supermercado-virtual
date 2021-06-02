<template>
    <div class="row row-departamentos row-departamentos-desenho">
      <div class="swiper-wrapper" v-if="listaInline">
        <div
          class="swiper-slide col-4 col-sm-2 item item-departamento"
          v-for="(departamento, index) in departamentos" :key="index"
          @click="goToDepartament(departamento)"
        >
            <div class="image">
                <img :src="departamento.imagem" :alt="departamento.title">
            </div>
            <div class="title">
                {{departamento.title}}
            </div>
        </div>
      </div>

      <div
        v-else
        v-for="(departamento, index) in departamentos" :key="index"
        @click="goToDepartament(departamento)"
        class="swiper-slide col-4 col-sm-2 item item-departamento"
      >
          <div class="image">
              <img :src="departamento.imagem" :alt="departamento.title">
          </div>
          <div class="title">
              {{departamento.title}}
          </div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

export default {

  data () {
    return {
      listaInline: false // TODO: Deve vir da API
    }
  },

  methods: {
    goToDepartament (departamento) {
      this.$router.push({ name: 'Produtos', params: { departamento: departamento } })
    }
  },

  mounted () {
    if (this.listaInline) {
      this.swiperDerp = new Swiper('.row-departamentos', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      })
    }
  }
}
</script>
