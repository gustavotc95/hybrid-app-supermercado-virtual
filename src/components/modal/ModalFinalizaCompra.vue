<template>
    <div class="component-modal modal-prod modal-finaliza" :class="showModal ? 'show ' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-finaliza">
          <div class="msg">
            <span>
              Pedido realizado com sucesso!
            </span>
          </div>
          <button class="btn btn-primary btn-confirmacao" @click="closeModal()">Ok</button>
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
      loading: false
    }
  },

  methods: {
    listener () {
      this.$bus.$on('MODAL_FINALIZA', payload => {
        this.showModal = true
      })

      this.$bus.$on('CLOSE_ALL_MODAL', payload => {
        this.showModal = false
      })
    },

    closeModal () {
      this.showModal = false
      this.$router.push({ path: '/' })
      localStorage.quantidadeCarrinho = 0
      this.$bus.$emit('MODAL_QTD_CART')
    }
  },

  mounted () {
    this.listener()
  }
}
</script>
