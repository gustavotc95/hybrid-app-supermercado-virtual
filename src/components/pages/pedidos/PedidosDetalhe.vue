<template>
    <div class="bloco-pedidos-detalhe">
      <div class="container">
        <div class="pedido-detalhe">
          <div class="section-title">Informações do Pedido</div>
          <div class="pedido-info shadow">
            <span>Pedido:</span> {{pedido.id}} <br>
            <span>Data:</span> {{pedido.diaCompra}} <br>
            <span>Status:</span> {{pedido.status}} <br>
            <span>Total:</span> R${{pedido.totalCompra}}
          </div>
          <div class="section-title">Informações de Entrega</div>
          <div class="pedido-info shadow">
            <span>Endereço:</span> {{pedido.enderecoEscolhido.content}} <br>
            <span>CEP:</span> {{pedido.enderecoEscolhido.cep}} <br>
            <span>Tipo de Entrega:</span> {{pedido.entregaEscolhida.tipo}} <br>
            <span>Taxa de Entrega:</span> {{pedido.entregaEscolhida.taxa}}
          </div>
          <div class="section-title">Produtos</div>
          <div class="bloco-produto-carrinho shadow" v-for="(produto, index) of pedido.produtosCompra" :key="index">
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
                  <div class="quantity">Quantidade: {{produto.quantidade}}</div>
                  <div class="preco-total">Total: R${{produto.precoTotal}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['pedido']
}
</script>
