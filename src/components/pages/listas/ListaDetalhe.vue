<template>
  <div class="lista-detalhe">
    <div class="container">
      <app-prod-lista :produtos="lista.produtos" :listaInline="listaInline" :busca="busca"></app-prod-lista>

      <div class="botoes">
        <button class="add-carrinho-full" @click.prevent="comprar(lista.produtos)">Adicionar lista ao carrinho</button>
      </div>
    </div>
  </div>
</template>

<script>
import ListaProdutos from '../../shared/lista-produtos/ListaProdutos.vue'

export default {
  props: ['lista'],

  components: {
    'app-prod-lista': ListaProdutos
  },

  data () {
    return {
      listaInline: false, // Sempre deve ser false
      busca: false // Sempre deve ser false
    }
  },

  methods: {
    comprar (produtos) {
      this.$bus.$emit('MODAL_ADD_CART', produtos)// TODO: Revisar
    }
  },

  mounted () {
    console.log(this.lista)
  }
}
</script>

<style>

</style>
