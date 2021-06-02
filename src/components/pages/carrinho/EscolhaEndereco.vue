<template>
  <div class="escolha-endereco">
    <div class="container">
      <div class="enderecos">
        <div class="custom-control custom-radio enderecos-item" v-for="(endereco, index) in userEnderecos" :key="index" @click="atualizaCompra(endereco)">
          <input type="radio" :id="'customRadio' + index" name="enderecoEscolhido" class="custom-control-input" :checked=" index == 0 " :value="endereco.content">
          <label class="custom-control-label" :for="'customRadio'+ index">
            <strong>{{endereco.title}}:</strong> <br>
            {{endereco.content}}
          </label>
        </div>
        <button class="btn btn-success btn-block btn-endereco" @click="showModal = true">Cadastrar novo endereço</button>
      </div>
    </div>
    <div class="bloco-bottom-cart">
      <div class="preco-total-carrinho"><span>Valor total:</span> <span class="valor">R${{precoTotalCarrinho}}</span></div>
      <router-link :to="{ name: 'Entrega'}" @click="atualizaCompra()" class="btn btn-primary btn-primary-full btn-carrinho">Escolher forma de entrega <span class="icon arrow-icon"></span></router-link>
    </div>

    <div class="component-modal modal-prod modal-endereco" :class="showModal ? 'show ' : ''">
      <div class="modal-container">
        <div class="close-modal" @click="closeModal()">&times;</div>
        <div class="bloco-endereco-modal">
          <form action="" v-on:submit.prevent="addEndereco()">
                <div class="mb-3">
                    <label for="address">Endereço</label>
                    <input type="text" class="form-control" id="addressNew" placeholder="Rua Brasil, 123" required="" v-model="addressNew">
                    <div class="invalid-feedback">
                      Por favor insira seu endereço de entrega.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address2">Bairro</label>
                    <input type="text" class="form-control" id="addressNew2" placeholder="Centro" required="" v-model="addressNew2">
                    <div class="invalid-feedback">
                      Por favor insira seu bairro.
                    </div>
                </div>

                <div class="mb-3">
                    <label for="zip">Cep</label>
                    <input type="text" class="form-control" id="cep" placeholder="35570-000" required="" v-model="cepNew">
                    <div class="invalid-feedback">
                      Digite seu CEP.
                    </div>
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
      <div class="shadow" @click="closeModal()"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      produtosCompra: '',
      precoTotalCarrinho: '',
      enderecoEscolhido: '',
      compra: '',
      addressNew: '',
      addressNew2: '',
      cepNew: '',

      userEnderecos: [
        {
          'title': 'Endereço 1',
          'content': 'Rua Nome da rua, 123, ap. 404 - Nome do bairro',
          'cep': '35570-000'
        },
        {
          'title': 'Endereço 2',
          'content': 'Rua Dr. Teixeira Soares, 390 - Centro',
          'cep': '35570-000'
        }
      ]
    }
  },

  methods: {
    atualizaCompra: (endereco) => {
      this.enderecoEscolhido = endereco
      localStorage.enderecoEscolhido = JSON.stringify(endereco)
    },

    closeModal () {
      this.showModal = false
    },

    addEndereco () {
      let novoEndereco = {
        'title': 'Endereço ' + (this.userEnderecos.length + 1),
        'content': this.addressNew + ' - ' + this.addressNew2,
        'cep': this.cepNew
      }
      this.userEnderecos = this.userEnderecos.concat(novoEndereco)// TODO: Revisar apos api
      console.log(this.userEnderecos)
      this.closeModal()
    }
  },

  mounted () {
    this.precoTotalCarrinho = JSON.parse(localStorage.getItem('precoTotalCarrinho'))
  }
}
</script>
