<template>
  <div class="destaques">
    <div class="container">
      <app-title-image :blocoInfos="blocoInfo" rotaPai="Ofertas" type="full"></app-title-image>
      <app-prod-lista :produtos="produtos" :listaInline="listaInline" :busca="busca"></app-prod-lista>
    </div>
  </div>
</template>

<script>
import TitleImage from '../../shared/title-image/TitleImage.vue'
import ListaProdutos from '../../shared/lista-produtos/ListaProdutos.vue'

export default {
  components: {
    'app-title-image': TitleImage,
    'app-prod-lista': ListaProdutos
  },

  data () {
    return {
      listaInline: false, // Sempre deve ser false

      busca: true, // TODO: Deve ser customizavél

      blocoInfo: { // TODO: Deve ser customizavél
        'title': 'Buscar',
        'imagem': require(`../../../assets/img/departamentos/imagens/oferta.jpg`)
      },

      produtos: [
        {
          'id': '1',
          'nome': 'Leite Camponesa 1lt Integral',
          'imagem': require(`../../../assets/img/produtos/leite.jpg`),
          'desconto': true,
          'precoAntigo': 'R$4,40',
          'preco': 'R$3,00'
        },
        {
          'id': '2',
          'nome': 'Maça Nacional',
          'imagem': require(`../../../assets/img/produtos/maca.jpg`),
          'desconto': true,
          'precoAntigo': 'R$3,00',
          'preco': 'R$2,50/kg'
        },
        {
          'id': '3',
          'nome': 'Açúcar Cristal Delta 5kg',
          'imagem': require(`../../../assets/img/produtos/acucar.jpg`),
          'desconto': true,
          'precoAntigo': 'R$8,99 un.',
          'preco': 'R$7,99 un.'
        },
        {
          'id': '4',
          'nome': 'Achocolatado Em Pó Nescau 400g 2.0',
          'imagem': require(`../../../assets/img/produtos/nescau.jpg`),
          'desconto': true,
          'precoAntigo': 'R$6,99 un.',
          'preco': 'R$5,99 un.'
        },
        {
          'id': '5',
          'nome': 'Sabão Em Pó Brilhante 1kg Multi Tec',
          'imagem': require(`../../../assets/img/produtos/sabao1.jpg`),
          'desconto': true,
          'precoAntigo': 'R$9,99 un.',
          'preco': 'R$7,99 un.'
        },
        {
          'id': '6',
          'nome': 'Detergente Em Pó Omo Leve 1kg Pague',
          'imagem': require(`../../../assets/img/produtos/sabao2.jpg`),
          'desconto': true,
          'precoAntigo': 'R$10,99 un.',
          'preco': 'R$8,99 un.'
        },
        {
          'id': '7',
          'nome': 'Sabão Em Pó Assim 1kg Tripla Ação',
          'imagem': require(`../../../assets/img/produtos/sabao3.jpg`),
          'desconto': true,
          'precoAntigo': 'R$7,99 un.',
          'preco': 'R$6,99 un.'
        },
        {
          'id': '8',
          'nome': 'Leite Camponesa 1lt Integral',
          'imagem': require(`../../../assets/img/produtos/leite.jpg`),
          'desconto': true,
          'precoAntigo': 'R$4,99',
          'preco': 'R$3,00'
        },
        {
          'nome': 'Maça Nacional',
          'imagem': require(`../../../assets/img/produtos/maca.jpg`),
          'desconto': true,
          'precoAntigo': 'R$3,00',
          'preco': 'R$2,50/kg'
        },
        {
          'id': '9',
          'nome': 'Açúcar Cristal Delta 5kg',
          'imagem': require(`../../../assets/img/produtos/acucar.jpg`),
          'desconto': true,
          'precoAntigo': 'R$9,99 un.',
          'preco': 'R$7,99 un.'
        },
        {
          'id': '10',
          'nome': 'Achocolatado Em Pó Nescau 400g 2.0',
          'imagem': require(`../../../assets/img/produtos/nescau.jpg`),
          'desconto': true,
          'precoAntigo': 'R$6,99 un.',
          'preco': 'R$5,99 un.'
        },
        {
          'id': '11',
          'nome': 'Sabão Em Pó Brilhante 1kg Multi Tec',
          'imagem': require(`../../../assets/img/produtos/sabao1.jpg`),
          'desconto': true,
          'precoAntigo': 'R$8,49 un.',
          'preco': 'R$7,99 un.'
        },
        {
          'id': '12',
          'nome': 'Detergente Em Pó Omo Leve 1kg Pague',
          'imagem': require(`../../../assets/img/produtos/sabao2.jpg`),
          'desconto': true,
          'precoAntigo': 'R$10,99 un.',
          'preco': 'R$8,99 un.'
        },
        {
          'id': '13',
          'nome': 'Sabão Em Pó Assim 1kg Tripla Ação',
          'imagem': require(`../../../assets/img/produtos/sabao3.jpg`),
          'desconto': true,
          'precoAntigo': 'R$7,99 un.',
          'preco': 'R$6,99 un.'
        }
      ]
    }
  }
}
</script>
