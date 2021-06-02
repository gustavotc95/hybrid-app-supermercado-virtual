<template>
    <div class="swiper-slide col-6 col-sm-6 col-md-4 bloco-produto">
        <div class="image" @click="showProdInfo(produto)">
            <img :src="produto.imagem" :alt="produto.nome">
        </div>
        <div class="title">
            {{produto.nome}}
        </div>
        <div class="preco" @click="showProdInfo(produto)">
            <div class="desconto" v-if="produto.desconto">
                <div class="preco-antigo">De: {{produto.precoAntigo}}</div>
                <div class="texto-separador">Por apenas</div>
                <div class="preco-atual">{{produto.preco}}</div>
            </div>
            <div class="preco-cheio" v-else>
                <div class="texto-separador">Por apenas</div>
                <div class="preco-atual">{{produto.preco}}</div>
            </div>
        </div>
        <div class="botoes" v-if="!produto.quantidade">
          <button class="add-lista" @click="addListModal(produto) "><span class="icon add-lista-icon"></span></button>
          <button class="add-carrinho" @click="addCartModal(produto)">Comprar</button>
        </div>
        <div class="botoes botoes-quantidade" v-if="produto.quantidade">
          <div class="number-input">
            <button @click="stepDownQuantity(produto)" class="menos"></button>
            <input class="quantity" min="0" name="quantity" :value="produto.quantidade" type="number">
            <button @click="stepUpQuantity(produto)" class="plus mais"></button>
          </div>
          <button class="add-carrinho" @click.prevent="comprar(produto)">Comprar</button>
        </div>
    </div>
</template>

<script>
export default {
  props: ['produto'],

  data () {
    return {
    }
  },

  methods: {
    showProdInfo (produto) {
      this.$bus.$emit('MODAL_PROD_INFO', produto)
    },

    addCartModal (produto) {
      this.$bus.$emit('MODAL_ADD_CART_MODAL', produto)
    },

    addListModal (produto) {
      this.$bus.$emit('MODAL_ADD_LIST', produto)
    },

    comprar (produto) {
      this.$bus.$emit('MODAL_ADD_CART', produto)
    }
  }
}
</script>
