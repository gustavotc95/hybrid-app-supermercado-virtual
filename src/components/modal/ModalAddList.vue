<template>
    <div class="component-modal modal-prod modal-add-list" :class="showModal ? 'show ' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-produto-modal" :class="'produto-'+produto.id">
          <div class="title">
            {{produto.nome}}
          </div>

          <div class="list">
            <select class="select-list" id="list-select" @change="listName($event, produto)">
                <option selected>Escolha um lista</option>
                <option v-for="(lista, index) in listas" :key="index" :value="lista.name">{{lista.name}}</option>
            </select>
            <div class="new-list" @click="createList()">Criar nova lista</div>
          </div>

          <div class="botoes">
            <div class="number-input">
              <button @click="stepDownQuantity(produto)" class="menos"></button>
              <input class="quantity" min="0" name="quantity" :value="produto.quantidade" type="number">
              <button @click="stepUpQuantity(produto)" class="plus mais"></button>
            </div>
            <button class="add-carrinho" @click.prevent="addList(produto)">Adicionar</button>
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
        'id': '1',
        'nome': 'Leite Camponesa 1lt Integral',
        'imagem': require(`../../assets/img/produtos/leite.jpg`),
        'desconto': true,
        'precoAntigo': 'R$4,99',
        'preco': 'R$3,00',
        'quantidade': '1',
        'lista': 'Nome da Lista'
      },
      listas: [
        {
          'name': 'Ofertas',
          'valor': '',
          'produtos': [ // TODO: Finalizar quando api estiver pronta
          ]
        },
        {
          'name': 'Compras do Mês',
          'valor': '',
          'produtos': [
          ]
        }
      ]
    }
  },

  methods: {
    listName (event, produto) {
      console.log(event.target.value)
      produto.lista = event.target.value
    },

    addList (produto) {
      this.showModal = false
      this.$bus.$emit('ADD_LIST', produto)
    },

    createList () {
      this.$bus.$emit('MODAL_CREATE_LIST')
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
      this.$bus.$on('MODAL_ADD_LIST', payload => {
        this.showModal = true

        this.produto.id = payload.id
        this.produto.nome = payload.nome
        this.produto.imagem = payload.imagem
        this.produto.desconto = payload.desconto
        this.produto.precoAntigo = payload.precoAntigo
        this.produto.preco = payload.preco
        this.produto.quantidade = '1'
      })

      this.$bus.$on('ADD_LIST', payload => {
        console.log(payload) // TODO: Finalizar quando api estiver pronta
      })

      this.$bus.$on('CLOSE_ALL_MODAL', payload => {
        this.showModal = false
      })
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
