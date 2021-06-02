<template>
  <div class="row-formas-pagamento">
    <div class="container">
      <div class="tipo-pagamento">
        <div class="title">Pagamento na Entrega</div>
        <div class="custom-control custom-radio pagamento-item" v-for="(tipoPagamento, index) in tiposPagamento" :key="index" @click="atualizaCompra(tipoPagamento)">
          <input type="radio" :id="'customRadioEntrega' + index" name="enderecoEscolhido" class="custom-control-input" :value="tipoPagamento.content">
          <label class="custom-control-label" :for="'customRadioEntrega'+ index">
            <strong>{{tipoPagamento.title}}</strong> <br>
            <span v-if="tipoPagamento.cartoesAceitos">Cartões Aceitos: {{tipoPagamento.cartoesAceitos}}</span>
          </label>
        </div>
      </div>
    </div>

    <div class="bloco-bottom-cart">
      <div class="preco-total-carrinho"><span>Valor total:</span> <span class="valor">R${{totalCompra}}</span></div>
      <button @click="finalizaCompra()" class="btn btn-primary btn-primary-full btn-carrinho" :class="disableNext ? 'disabled' : ''">Finalizar Compra</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      totalCompra: '',
      disableNext: true,
      tiposPagamento: [
        {
          'title': 'Crédito',
          'cartoesAceitos': 'Visa, Mastercard, Elo, Coopelife, Sindplus, Cabal, Sodexo, Sysprodata'
        },
        {
          'title': 'Débito',
          'cartoesAceitos': 'Visa, Mastercard, Elo, Coopelife, Sindplus, Cabal, Sodexo, Sysprodata'
        },
        {
          'title': 'Dinheiro'
        }
      ]
    }
  },

  methods: {
    atualizaCompra (tipoPagamento) {
      localStorage.tipoPagamento = JSON.stringify(tipoPagamento.title)
      this.disableNext = false
    },
    getId () {
      var today = new Date()
      var id = JSON.stringify(today.getDate()) + (today.getMonth() + 1) + today.getHours() + today.getMinutes() + today.getSeconds() + Math.floor(Math.random() * 100)
      console.log(id)
      return id
    },
    finalizaCompra () {
      let produtosCompra = JSON.parse(localStorage.getItem('produtosCompra'))
      let totalCompra = JSON.parse(localStorage.getItem('totalCompra'))
      let entregaEscolhida = JSON.parse(localStorage.getItem('entregaEscolhida'))
      let tipoPagamento = JSON.parse(localStorage.getItem('tipoPagamento'))
      let diaCompra = JSON.parse(localStorage.getItem('diaCompra'))
      let horarioCompra = JSON.parse(localStorage.getItem('horarioCompra'))
      let enderecoEscolhido = JSON.parse(localStorage.getItem('enderecoEscolhido'))

      let pedido = {
        'id': this.getId(),
        'produtosCompra': produtosCompra,
        'totalCompra': totalCompra,
        'entregaEscolhida': entregaEscolhida,
        'tipoPagamento': tipoPagamento,
        'diaCompra': diaCompra,
        'horarioCompra': horarioCompra,
        'enderecoEscolhido': enderecoEscolhido
      }
      this.$bus.$emit('MODAL_FINALIZA')
      localStorage.removeItem('produtosCompra')
      localStorage.removeItem('totalCompra')
      localStorage.removeItem('entregaEscolhida')
      localStorage.removeItem('tipoPagamento')
      localStorage.removeItem('diaCompra')
      localStorage.removeItem('horarioCompra')
      localStorage.removeItem('precoTotalCarrinho')
      localStorage.removeItem('enderecoEscolhido')
      console.log(pedido)
    }
  },

  mounted () {
    this.totalCompra = JSON.parse(localStorage.getItem('totalCompra'))
  }
}
</script>
