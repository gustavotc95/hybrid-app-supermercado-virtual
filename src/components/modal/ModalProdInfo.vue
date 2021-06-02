<template>
    <div class="component-modal modal-prod modal-prod-info" :class="showModal ? 'show' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-produto-modal">
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
            <button class="add-lista" @click="addListModal(produto) "><span class="icon add-lista-icon"></span></button>
            <button class="add-carrinho" @click="addCartModal(produto)">Comprar</button>
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
      produto: {
        'nome': 'Leite Camponesa 1lt Integral',
        'imagem': require(`../../assets/img/produtos/leite.jpg`),
        'desconto': true,
        'precoAntigo': 'R$4,99',
        'preco': 'R$3,00'
      }
    }
  },

  methods: {
    listener () {
      this.$bus.$on('MODAL_PROD_INFO', payload => {
        this.showModal = true

        this.produto.nome = payload.nome
        this.produto.imagem = payload.imagem
        this.produto.desconto = payload.desconto
        this.produto.precoAntigo = payload.precoAntigo
        this.produto.preco = payload.preco
      })

      this.$bus.$on('CLOSE_ALL_MODAL', payload => {
        this.showModal = false
      })
    },

    closeModal () {
      this.showModal = false
    },

    addCartModal (produto) {
      this.$bus.$emit('MODAL_ADD_CART_MODAL', produto)
    },

    addListModal (produto) {
      this.$bus.$emit('MODAL_ADD_LIST', produto)
    }
  },

  mounted () {
    this.listener()
  }
}
</script>
