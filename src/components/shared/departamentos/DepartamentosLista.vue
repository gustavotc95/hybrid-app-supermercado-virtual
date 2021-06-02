<template>
    <div class="row row-departamentos row-departamentos-lista">
      <app-title-image
        v-for="(departamento, index) of listaDepartamentos" :key="index"
        :blocoInfos="departamento"
        rotaPai="Departamento"
        linkMaker=true
      >
      </app-title-image>
    </div>
</template>

<script>
import TitleImage from '../title-image/TitleImage.vue'

export default {
  props: ['listaDepartamentos'],

  components: {
    'app-title-image': TitleImage
  },

  data () {
    return {
    }
  }
}
</script>
