<template>
  <div class="row-produtos">
    <div class="bloco-busca" v-if="busca">
      <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="Busque um produto">
    </div>
    <div class="swiper-wrapper" v-if="listaInline">
      <app-produto v-for="(produto, index) of produtosComFiltro" :key="index" :produto="produto"></app-produto>
    </div>
    <div class="row no-gutters" v-else>
      <app-produto v-for="(produto, index) of produtosComFiltro" :key="index" :produto="produto"></app-produto>
    </div>
  </div>
</template>

<script>
import Produto from '../produto/Produto.vue'

export default {
  components: {
    'app-produto': Produto
  },

  data () {
    return {
      filtro: ''
    }
  },

  props: ['produtos', 'listaInline', 'busca'],

  computed: {
    produtosComFiltro () {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')
        return this.produtos.filter(produtos => exp.test(produtos.nome))
      } else {
        return this.produtos
      }
    }
  }

}
</script>
