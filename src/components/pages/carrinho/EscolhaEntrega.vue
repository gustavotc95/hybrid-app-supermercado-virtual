<template>
  <div class="row-formas-entrega">
    <div class="container">
      <div class="tipo-entrega">
        <div class="custom-control custom-radio entrega-item" v-for="(tipoEntrega, index) in tiposEntrega" :key="index" @click="escolheHorario(tipoEntrega)">
          <input type="radio" :id="'customRadioEntrega' + index" name="enderecoEscolhido" class="custom-control-input" :value="tipoEntrega.content">
          <label class="custom-control-label" :for="'customRadioEntrega'+ index">
            <strong>{{tipoEntrega.title}}:</strong> <br>
            <span class="taxa">Taxa de Serviço:</span>
            <span v-if="verificaFrete(tipoEntrega)" class="taxa-valor">R$ {{tipoEntrega.taxa}}</span>
            <span v-else class="taxa-free">Grátis</span>
            <div class="horario">Receba seu pedido em até {{tipoEntrega.tempoMin}} <span v-if="tipoEntrega.tempoMin > 1">horas</span><span v-else>hora</span></div>
          </label>
        </div>
      </div>
    </div>

    <div class="bloco-bottom-cart">
      <div class="preco-total-carrinho"><span>Valor total:</span> <span class="valor">R${{totalCompra}}</span></div>
      <router-link :to="{ name: 'Pagamento'}" class="btn btn-primary btn-primary-full btn-carrinho" :class="disableNext ? 'disabled' : ''">Escolher forma de pagamento <span class="icon arrow-icon"></span></router-link>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      totalCompra: '',
      entregaEscolhido: '',
      disableNext: true,

      iniciaEntrega: '08:00', // TODO: Ultimo horario de entrega, deve vir da API
      encerraEntrega: '18:00', // TODO: Ultimo horario de entrega, deve vir da API
      encerraEntregaSab: '12:00', // TODO: Ultimo horario de entrega do sábado, deve vir da API

      tiposEntrega: [
        {
          'title': 'Entrega Padrão',
          'taxa': '5.00',
          'tempoMin': '3', // Tempo minimo para receber, processar e embalar pedido
          'gratisDepoisDe': '80.00',
          'entregaSabado': false
        },
        {
          'title': 'Retirada na Loja',
          'taxa': false,
          'tempoMin': '1', // Tempo minimo para receber, processar e embalar pedido
          'entregaSabado': true,
          'gratisDepoisDe': '0.00'
        }
      ]
    }
  },

  methods: {
    escolheHorario (tipoEntrega) {
      this.atualizaEntrega(tipoEntrega)
      let now = this.getNow()
      if (!this.verificaDia(now, tipoEntrega)) {
        if (!this.verificaHora(now.horaAtual, now.diaSemanaNum, tipoEntrega)) {
          this.$bus.$emit('MODAL_HORARIO')
        }
      }
      this.disableNext = false
    },

    atualizaPrecoTotal (taxa, gratisDepoisDe) {
      let totalCarrinho = JSON.parse(localStorage.getItem('precoTotalCarrinho'))
      if (taxa) {
        if (totalCarrinho < gratisDepoisDe) {
          this.totalCompra = Number(totalCarrinho.replace(',', '.')) + Number(taxa)
          this.totalCompra = this.totalCompra.toFixed(2).replace('.', ',')
        }
      } else {
        this.totalCompra = totalCarrinho
      }
      localStorage.totalCompra = JSON.stringify(this.totalCompra)
    },

    atualizaEntrega (tipoEntrega, horarioEscolhido) {
      this.entregaEscolhida = tipoEntrega
      let taxa = ''
      if (this.verificaFrete(tipoEntrega)) {
        taxa = tipoEntrega.taxa
      } else {
        taxa = 'Grátis'
      }
      let entregaInfos = {
        'tipo': tipoEntrega.title,
        'taxa': taxa
      }
      localStorage.horarioCompra = JSON.stringify(this.getNow().horaAtual)
      localStorage.diaCompra = JSON.stringify(this.getNow().date)
      localStorage.entregaEscolhida = JSON.stringify(entregaInfos)
      this.atualizaPrecoTotal(tipoEntrega.taxa, tipoEntrega.gratisDepoisDe)
    },

    addZero (i) {
      if (i < 10) {
        i = '0' + i
      }
      return i
    },

    getNow () {
      const today = new Date()
      const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
      const time = this.addZero(today.getHours()) + ':' + this.addZero(today.getMinutes())
      const hora = this.addZero(today.getHours())
      const minutos = this.addZero(today.getMinutes())
      const diaSemanaNum = today.getDay()
      const mes = today.getMonth() + 1
      const ano = today.getFullYear()
      const dateTime = date + ' ' + time
      this.timestamp = dateTime
      return {
        'date': date,
        'diaSemanaNum': diaSemanaNum,
        'mes': mes,
        'ano': ano,
        'horaAtual': time,
        'horas': hora,
        'minutos': minutos
      }
    },

    verificaHora (hora, diaSemanaNum, tipoEntrega) {
      let segSex = this.encerraEntrega.split(':')[0]
      let sab = this.encerraEntregaSab.split(':')[0]
      if (diaSemanaNum === 0) {
        return false
      }
      if (diaSemanaNum === 6) {
        if (hora >= (Number(sab) - Number(this.tipoEntrega.tempoMin))) {
          return false
        }
      }
      if (hora >= (Number(segSex) - Number(this.tipoEntrega.tempoMin))) {
        return false
      }

      return true
    },

    verificaDia (now, tipoEntrega) {
      if (tipoEntrega.entregaSabado) {
        if (now.diaSemanaNum === 0) {
          return false
        }
      } else {
        if (now.diaSemanaNum === 0 || now.diaSemanaNum === 6) {
          return false
        }
      }
      return true
    },

    verificaFrete (tipoEntrega) {
      let valorCompra = JSON.parse(localStorage.getItem('precoTotalCarrinho'))
      if (valorCompra >= tipoEntrega.gratisDepoisDe) {
        return false
      }
      return true
    }
  },

  mounted () {
    this.totalCompra = JSON.parse(localStorage.getItem('precoTotalCarrinho'))
  }
}
</script>
