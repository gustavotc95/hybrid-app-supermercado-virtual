<template>
    <div class="component-modal modal-prod modal-horario" :class="showModal ? 'show ' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-horarios">
          <div class="title">Horário limite de entrega</div>
          <div class="msg">
            <span>
              A previsão de entrega é para o próximo dia útil
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
      this.$bus.$on('MODAL_HORARIO', payload => {
        this.showModal = true
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
