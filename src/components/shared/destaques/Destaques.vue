<template>
    <div class="destaques">
        <div class="container">
            <div class="block-title">
                Destaques
            </div>
            <app-prod-lista :produtos="produtos" :listaInline="listaInline" :busca="busca"></app-prod-lista>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'

import ListaProdutos from '../lista-produtos/ListaProdutos.vue'

export default {
  components: {
    'app-prod-lista': ListaProdutos
  },

  data () {
    return {
      listaInline: true, // TODO: Deve vir da API

      busca: false,

      produtos: [
        {
          'id': '1',
          'nome': 'Leite Camponesa 1lt Integral',
          'imagem': require(`../../../assets/img/produtos/leite.jpg`),
          'desconto': false,
          'precoAntigo': '',
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
          'desconto': false,
          'precoAntigo': '',
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
          'desconto': false,
          'precoAntigo': '',
          'preco': 'R$7,99 un.'
        },
        {
          'id': '6',
          'nome': 'Detergente Em Pó Omo Leve 1kg Pague',
          'imagem': require(`../../../assets/img/produtos/sabao2.jpg`),
          'desconto': false,
          'precoAntigo': '',
          'preco': 'R$8,99 un.'
        },
        {
          'id': '7',
          'nome': 'Sabão Em Pó Assim 1kg Tripla Ação',
          'imagem': require(`../../../assets/img/produtos/sabao3.jpg`),
          'desconto': false,
          'precoAntigo': '',
          'preco': 'R$6,99 un.'
        },
        {
          'id': '8',
          'nome': 'Leite Camponesa 1lt Integral',
          'imagem': require(`../../../assets/img/produtos/leite.jpg`),
          'desconto': false,
          'precoAntigo': '',
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
          'desconto': false,
          'precoAntigo': '',
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
          'desconto': false,
          'precoAntigo': '',
          'preco': 'R$7,99 un.'
        },
        {
          'id': '12',
          'nome': 'Detergente Em Pó Omo Leve 1kg Pague',
          'imagem': require(`../../../assets/img/produtos/sabao2.jpg`),
          'desconto': false,
          'precoAntigo': '',
          'preco': 'R$8,99 un.'
        },
        {
          'id': '13',
          'nome': 'Sabão Em Pó Assim 1kg Tripla Ação',
          'imagem': require(`../../../assets/img/produtos/sabao3.jpg`),
          'desconto': false,
          'precoAntigo': '',
          'preco': 'R$6,99 un.'
        }
      ]
    }
  },

  mounted () {
    if (this.listaInline) {
      this.swiperDest = new Swiper('.destaques .row-produtos', {
        slidesPerView: 3,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        // speed: 1000,
        breakpoints: {
          // when window width is <= 640px
          992: {
            slidesPerView: 2
          }
        }
      })
    }
  }
}
</script>
