<template>
  <div class="app-home">
    <app-slide></app-slide>
    <app-departamentos></app-departamentos>
    <app-destaques v-if="showDestaques"></app-destaques>
    <app-mais-vendidos v-if="showMaisVendidos"></app-mais-vendidos>
  </div>
</template>
<script>
// import components
import Slide from '../../shared/slide/Slide.vue'
import Departamentos from '../../shared/departamentos/Departamentos.vue'
import Destaques from '../../shared/destaques/Destaques.vue'
import MaisVendidos from '../../shared/mais-vendidos/MaisVendidos.vue'

export default {
  data () {
    return {
      showDestaques: true, // TODO: Deve vir da API
      showMaisVendidos: true // TODO: Deve vir da API
    }
  },

  components: {
    'app-slide': Slide,
    'app-departamentos': Departamentos,
    'app-destaques': Destaques,
    'app-mais-vendidos': MaisVendidos
  }
}
</script>
