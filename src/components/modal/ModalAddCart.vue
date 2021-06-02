<template>
    <div class="component-modal modal-prod modal-add-cart" :class="showModal ? 'show ' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-produto-modal" :class="'produto-'+produto.id">
          <div class="image">
              <img :src="produto.imagem" :alt="produto.nome">
          </div>
          <div class="title">
              {{produto.nome}}
          </div>
          <div class="preco">
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
          <div class="botoes">
            <div class="number-input">
              <button @click="stepDownQuantity(produto)" class="menos"></button>
              <input class="quantity" min="0" name="quantity" :value="produto.quantidade" type="number">
              <button @click="stepUpQuantity(produto)" class="plus mais"></button>
            </div>
            <button class="add-carrinho" @click.prevent="comprar(produto)">Comprar</button>
          </div>
        </div>
      </div>
      <div class="shadow" @click="closeModal()"></div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      loading: false,
      produtosCompra: [],
      produto: []
    }
  },

  methods: {
    comprar (produto) {
      this.$bus.$emit('MODAL_ADD_CART', produto)
      this.$bus.$emit('CLOSE_ALL_MODAL', produto)
    },

    stepDownQuantity (produto) {
      if (produto.quantidade > 1) {
        produto.quantidade--
        return this.$el.querySelector('.produto-' + produto.id + ' input[type=number]').stepDown()
      }
    },

    stepUpQuantity (produto) {
      produto.quantidade++
      return this.$el.querySelector('.produto-' + produto.id + ' input[type=number]').stepUp()
    },

    listener () {
      this.$bus.$on('MODAL_ADD_CART_MODAL', payload => {
        this.showModal = true

        this.produto.id = payload.id
        this.produto.nome = payload.nome
        this.produto.imagem = payload.imagem
        this.produto.desconto = payload.desconto
        this.produto.precoAntigo = payload.precoAntigo
        this.produto.preco = payload.preco
        this.produto.quantidade = '1'
      })

      this.$bus.$on('MODAL_ADD_CART', payload => {
        this.atualizaCompra(payload)
      })

      this.$bus.$on('CLOSE_ALL_MODAL', payload => {
        this.showModal = false
      })
    },

    atualizaCompra (produto) {
      let produtoAdicionado = [{
        'id': produto.id,
        'nome': produto.nome,
        'imagem': produto.imagem,
        'desconto': produto.desconto,
        'precoAntigo': produto.precoAntigo,
        'preco': produto.preco,
        'quantidade': produto.quantidade
      }]
      if (localStorage.produtosCompra) {
        this.produtosCompra = JSON.parse(localStorage.getItem('produtosCompra'))
        this.produtosCompra = this.produtosCompra.concat(produtoAdicionado)
        localStorage.produtosCompra = JSON.stringify(this.produtosCompra)
      } else {
        this.produtosCompra = produtoAdicionado
        localStorage.produtosCompra = JSON.stringify(this.produtosCompra)
      }

      this.$bus.$emit('MODAL_QTD_CART', produto)

      this.showModal = false
    },

    closeModal () {
      this.showModal = false
    }
  },

  mounted () {
    this.listener()
  }
}
</script>
