<template>
  <div class="row-produtos-carrinho">
    <div v-show="!produtosCompra.length > 0" class="msg">
      <img src="../../../assets/img/vazio.png" alt="Carrinho Vazio">
      Carrinho vazio!
    </div>
    <div class="bloco-produto-carrinho shadow" v-for="(produto, index) of produtosCompra" :key="index">
        <div class="image" @click="showProdInfo(produto)">
          <img :src="produto.imagem" :alt="produto.nome">
        </div>
        <div class="infos">
          <div class="title">
            {{produto.nome}}
          </div>
          <div class="total">
            <div class="preco">
              <small class="preco-atual">{{produto.preco}}</small>
              <div class="preco-total">Total: R${{produto.precoTotal}}</div>
            </div>
            <div class="botoes botoes-quantidade" v-if="produto.quantidade">
              <div class="number-input">
                <button @click="stepDownQuantity(produto)" class="menos"></button>
                <input class="quantity" min="0" name="quantity" :value="produto.quantidade" type="number">
                <button @click="stepUpQuantity(produto)" class="plus mais"></button>
              </div>
              <span class="icon lixeira-icon" @click="excluiProduto(produto, index)" ></span>
            </div>
          </div>
        </div>
    </div>
    <div class="bloco-bottom-cart">
      <div class="preco-total-carrinho"><span>Valor total:</span> <span class="valor">R${{precoTotalCarrinho}}</span></div>
      <router-link :to="{ name: 'Escolha seu endereço', params: { produtos: produtosCompra, precoTotalCarrinho: precoTotalCarrinho }}" @click="atualizaCompra()" class="btn btn-primary btn-primary-full btn-carrinho">Escolher endereco de entrega <span class="icon arrow-icon"></span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      produtosCompra: [],

      precoTotalCarrinho: 0
    }
  },

  methods: {
    showProdInfo (produto) {
      this.$bus.$emit('MODAL_PROD_INFO', produto)
    },

    stepDownQuantity (produto) {
      if (produto.quantidade > 1) {
        produto.quantidade--
        this.atualizaPrecoTotalProduto()
        this.getPrecoTotalCarrinho()
        this.$bus.$emit('MODAL_QTD_CART', produto)
      }
    },

    stepUpQuantity (produto) {
      produto.quantidade++
      this.atualizaPrecoTotalProduto()
      this.getPrecoTotalCarrinho()
      this.$bus.$emit('MODAL_QTD_CART', produto)
    },

    limpaPreco: (preco) => {
      preco = preco.replace(/[R$]/g, '').replace(/[/]/g, '').replace(/[a-z]/g, '').replace(' ', '').replace('.', '').replace(/[,]/g, '.')
      let valor = Number(preco).toFixed(2)
      return Number(valor)
    },

    getPrecoTotal (produto) {
      let quantidade = produto.quantidade
      let preco = this.limpaPreco(produto.preco)
      let precoTotal = quantidade * preco
      precoTotal = precoTotal.toFixed(2).toString()
      return precoTotal
    },

    getPrecoTotalCarrinho () { // Atualiza o preço total do carrinho
      this.precoTotalCarrinho = 0
      if (this.produtosCompra.length > 0) {
        this.produtosCompra.forEach((produto, index) => {
          this.precoTotalCarrinho += Number(produto.precoTotal)
        })
        this.precoTotalCarrinho = this.precoTotalCarrinho.toFixed(2).replace('.', ',')
      } else {
        this.precoTotalCarrinho = this.precoTotalCarrinho.toFixed(2).replace('.', ',')
      }
      this.atualizaCompra()
    },

    atualizaPrecoTotalProduto () { // Atualiza o preço total do produto
      this.produtosCompra.forEach((produto, index) => {
        this.produtosCompra[index].precoTotal = this.getPrecoTotal(produto)
      })
      this.atualizaCompra()
    },

    excluiProduto (produto, index) {
      let remover = confirm('Você tem certeza?')
      if (remover) {
        this.produtosCompra.splice(index, 1)
      }
      this.getPrecoTotalCarrinho()
      this.$bus.$emit('MODAL_QTD_CART', produto)
    },

    atualizaCompra () {
      localStorage.produtosCompra = JSON.stringify(this.produtosCompra)
      localStorage.precoTotalCarrinho = JSON.stringify(this.precoTotalCarrinho)
    }
  },

  mounted () {
    if (JSON.parse(localStorage.getItem('produtosCompra'))) {
      this.produtosCompra = JSON.parse(localStorage.getItem('produtosCompra'))
      this.atualizaPrecoTotalProduto()
      this.getPrecoTotalCarrinho()
    }
  }
}
</script>
