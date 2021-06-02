<template>
    <div class="component-modal modal-prod modal-create-list" :class="showModal ? 'show ' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-produto-modal">
          <div class="title">
            Nova Lista
          </div>
          <div class="list">
            <input type="text" class="form-control" name="listName" id="listName" placeholder="Nome">
          </div>

          <div class="botoes">
            <button class="add-carrinho" @click.prevent="create()">Criar lista</button>
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
    listener () {
      this.$bus.$on('MODAL_CREATE_LIST', payload => {
        this.showModal = true
      })

      this.$bus.$on('CLOSE_ALL_MODAL', payload => {
        this.showModal = false
      })
    },

    create () {
      let value = document.querySelector('#listName').value
      console.log(value) // TODO: Revisar após integração com a API
      this.showModal = false
      document.querySelector('#listName').value = ''
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
