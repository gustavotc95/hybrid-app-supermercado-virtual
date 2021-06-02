<template>
    <div class="bloco-pedidos">
      <div class="container">
        <div class="pedidos">
          <div class="pedidos-item shadow-small" v-for="(pedido, index) in pedidos" :key="index">
              <router-link :to="{ name: 'pedido detalhe', params: { pedido: pedido }}">
                <div class="pedido-info">
                  Pedido: {{pedido.id}} <br>
                  Data: {{pedido.diaCompra}} <br>
                  Status: {{pedido.status}} <br>
                  Total: R${{pedido.totalCompra}} <br>
                  <span class="mais-detalhes">Ver mais detalhes</span>
                </div>
              </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      pedidos: [
        {
          'status': 'Em andamento ',
          'diaCompra': '17/11/2019',
          'entregaEscolhida': {
            'tipo': 'Entrega Padrão',
            'taxa': 'Grátis'
          },
          'horarioCompra': '22:56',
          'id': '171122565340',
          'produtosCompra': [
            {
              'id': '1',
              'nome': 'Leite Camponesa 1lt Integral',
              'imagem': require(`../../../assets/img/produtos/leite.jpg`),
              'desconto': true,
              'precoAntigo': 'R$4,40',
              'preco': 'R$3,00',
              'precoTotal': '3.00',
              'quantidade': '1'
            },
            {
              'id': '2',
              'nome': 'Maça Nacional',
              'imagem': require(`../../../assets/img/produtos/maca.jpg`),
              'desconto': true,
              'precoAntigo': 'R$3,00',
              'preco': 'R$2,50/kg',
              'precoTotal': '7.50',
              'quantidade': '3'
            }
          ],
          'tipoPagamento': 'Crédito',
          'totalCompra': '10,50',
          'enderecoEscolhido': {
            'cep': '35570-000',
            'content': 'Rua Nome da rua, 123, ap. 404 - Nome do bairro',
            'title': 'Endereço 1'
          }
        },
        {
          'status': 'Entregue',
          'diaCompra': '17/11/2019',
          'entregaEscolhida': {
            'tipo': 'Entrega Padrão',
            'taxa': '5.00'
          },
          'horarioCompra': '22:56',
          'id': '171122565340',
          'produtosCompra': [
            {
              'id': '1',
              'nome': 'Leite Camponesa 1lt Integral',
              'imagem': require(`../../../assets/img/produtos/leite.jpg`),
              'desconto': true,
              'precoAntigo': 'R$4,40',
              'preco': 'R$3,00',
              'precoTotal': '3.00',
              'quantidade': '1'
            },
            {
              'id': '2',
              'nome': 'Maça Nacional',
              'imagem': require(`../../../assets/img/produtos/maca.jpg`),
              'desconto': true,
              'precoAntigo': 'R$3,00',
              'preco': 'R$2,50/kg',
              'precoTotal': '7.50',
              'quantidade': '3'
            }
          ],
          'tipoPagamento': 'Crédito',
          'totalCompra': '10,50',
          'enderecoEscolhido': {
            'cep': '35570-000',
            'content': 'Rua Nome da rua, 123, ap. 404 - Nome do bairro',
            'title': 'Endereço 1'
          }
        }
      ]
    }
  }
}
</script>
