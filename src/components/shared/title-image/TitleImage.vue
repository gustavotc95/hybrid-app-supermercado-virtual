<template>
  <div class="title-imagem" :class="type" @click="goToRouter(blocoInfos, linkMaker)">
      <div class="image">
          <img :src="blocoInfos.imagem" :alt="blocoInfos.title">
      </div>
      <div class="title">
          {{blocoInfos.title}}
      </div>
      <div class="shadow"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  props: ['blocoInfos', 'rotaPai', 'linkMaker', 'type'],

  methods: {
    goToRouter (blocoInfos, linkMaker) {
      if (linkMaker) {
        this.$router.push({ name: this.rotaPai, params: { infos: blocoInfos, slug: blocoInfos.slug } })
      }
    }
  }
}
</script>
