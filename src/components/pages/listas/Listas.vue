<template>
  <div class="bloco-listas">
      <div class="container">
          <div class="listas">
              <div class="lista-item shadow-small" v-for="(lista, index) in listas" :key="index">
                <router-link :to="{ name: 'lista detalhe', params: { lista: lista }}">
                  <div class="lista-info">
                    <div class="nome">{{lista.name}}</div>
                    <div class="row-quantidade-preco">
                      <div class="total">R${{lista.valor}}</div>
                      <span>-</span>
                      <div class="quantidade">{{lista.produtos.length}} produtos</div>
                    </div>
                  </div>
                </router-link>
                <overflow-menu>
                  <ul>
                      <li>
                        <router-link :to="{ name: 'lista detalhe', params: { lista: lista }}">
                          Editar
                        </router-link>
                      </li>
                      <li @click="excluir()">Excluir</li>
                  </ul>
                </overflow-menu>
              </div>
          </div>
      </div>
      <div class="new-lista shadow" @click="createList()">
        +
      </div>
  </div>
</template>

<script>
// import components
import OverflowMenu from '../../shared/overflow-menu/OverflowMenu.vue'

export default {
  components: {
    'overflow-menu': OverflowMenu
  },

  data () {
    return {
      listas: [
        {
          'name': 'Ofertas',
          'valor': '',
          'produtos': [ // TODO: O preços desses produtos deve estar sempre atualizados
            {
              'id': '1',
              'nome': 'Leite Camponesa 1lt Integral',
              'imagem': require(`../../../assets/img/produtos/leite.jpg`),
              'desconto': true,
              'precoAntigo': 'R$4,40',
              'preco': 'R$3,56',
              'quantidade': 3
            },
            {
              'id': '2',
              'nome': 'Maça Nacional',
              'imagem': require(`../../../assets/img/produtos/maca.jpg`),
              'desconto': true,
              'precoAntigo': 'R$3,00',
              'preco': 'R$2,50/kg',
              'quantidade': 2
            },
            {
              'id': '4',
              'nome': 'Achocolatado Em Pó Nescau 400g 2.0',
              'imagem': require(`../../../assets/img/produtos/nescau.jpg`),
              'desconto': true,
              'precoAntigo': 'R$6,99 un.',
              'preco': 'R$5,99 un.',
              'quantidade': 1
            },
            {
              'id': '5',
              'nome': 'Sabão Em Pó Brilhante 1kg Multi Tec',
              'imagem': require(`../../../assets/img/produtos/sabao1.jpg`),
              'desconto': true,
              'precoAntigo': 'R$9,99 un.',
              'preco': 'R$7,99 un.',
              'quantidade': 3
            },
            {
              'id': '6',
              'nome': 'Detergente Em Pó Omo Leve 1kg Pague',
              'imagem': require(`../../../assets/img/produtos/sabao2.jpg`),
              'desconto': true,
              'precoAntigo': 'R$10,99 un.',
              'preco': 'R$8,99 un.',
              'quantidade': 3
            },
            {
              'id': '7',
              'nome': 'Sabão Em Pó Assim 1kg Tripla Ação',
              'imagem': require(`../../../assets/img/produtos/sabao3.jpg`),
              'desconto': true,
              'precoAntigo': 'R$7,99 un.',
              'preco': 'R$6,99 un.',
              'quantidade': 3
            },
            {
              'id': '8',
              'nome': 'Leite Camponesa 1lt Integral',
              'imagem': require(`../../../assets/img/produtos/leite.jpg`),
              'desconto': true,
              'precoAntigo': 'R$4,99',
              'preco': 'R$3,00',
              'quantidade': 3
            },
            {
              'id': '9',
              'nome': 'Açúcar Cristal Delta 5kg',
              'imagem': require(`../../../assets/img/produtos/acucar.jpg`),
              'desconto': true,
              'precoAntigo': 'R$9,99 un.',
              'preco': 'R$7,99 un.',
              'quantidade': 3
            },
            {
              'id': '10',
              'nome': 'Achocolatado Em Pó Nescau 400g 2.0',
              'imagem': require(`../../../assets/img/produtos/nescau.jpg`),
              'desconto': true,
              'precoAntigo': 'R$6,99 un.',
              'preco': 'R$5,99 un.',
              'quantidade': 3
            }
          ]
        },
        {
          'name': 'Compras do Mês',
          'valor': '',
          'produtos': [ // TODO: O preços desses produtos deve estar sempre atualizados
            {
              'id': '1',
              'nome': 'Leite Camponesa 1lt Integral',
              'imagem': require(`../../../assets/img/produtos/leite.jpg`),
              'desconto': true,
              'precoAntigo': 'R$4,40',
              'preco': 'R$3,00',
              'quantidade': 3
            },
            {
              'id': '2',
              'nome': 'Maça Nacional',
              'imagem': require(`../../../assets/img/produtos/maca.jpg`),
              'desconto': true,
              'precoAntigo': 'R$3,00',
              'preco': 'R$2,50/kg',
              'quantidade': 3
            },
            {
              'id': '3',
              'nome': 'Açúcar Cristal Delta 5kg',
              'imagem': require(`../../../assets/img/produtos/acucar.jpg`),
              'desconto': true,
              'precoAntigo': 'R$8,99 un.',
              'preco': 'R$7,99 un.',
              'quantidade': 3
            },
            {
              'id': '4',
              'nome': 'Achocolatado Em Pó Nescau 400g 2.0',
              'imagem': require(`../../../assets/img/produtos/nescau.jpg`),
              'desconto': true,
              'precoAntigo': 'R$6,99 un.',
              'preco': 'R$5,99 un.',
              'quantidade': 3
            },
            {
              'id': '5',
              'nome': 'Sabão Em Pó Brilhante 1kg Multi Tec',
              'imagem': require(`../../../assets/img/produtos/sabao1.jpg`),
              'desconto': true,
              'precoAntigo': 'R$9,99 un.',
              'preco': 'R$7,99 un.',
              'quantidade': 3
            },
            {
              'id': '6',
              'nome': 'Detergente Em Pó Omo Leve 1kg Pague',
              'imagem': require(`../../../assets/img/produtos/sabao2.jpg`),
              'desconto': true,
              'precoAntigo': 'R$10,99 un.',
              'preco': 'R$8,99 un.',
              'quantidade': 3
            },
            {
              'id': '7',
              'nome': 'Sabão Em Pó Assim 1kg Tripla Ação',
              'imagem': require(`../../../assets/img/produtos/sabao3.jpg`),
              'desconto': true,
              'precoAntigo': 'R$7,99 un.',
              'preco': 'R$6,99 un.',
              'quantidade': 3
            },
            {
              'id': '8',
              'nome': 'Leite Camponesa 1lt Integral',
              'imagem': require(`../../../assets/img/produtos/leite.jpg`),
              'desconto': true,
              'precoAntigo': 'R$4,99',
              'preco': 'R$3,00',
              'quantidade': 3
            },
            {
              'id': '9',
              'nome': 'Açúcar Cristal Delta 5kg',
              'imagem': require(`../../../assets/img/produtos/acucar.jpg`),
              'desconto': true,
              'precoAntigo': 'R$9,99 un.',
              'preco': 'R$7,99 un.',
              'quantidade': 3
            },
            {
              'id': '10',
              'nome': 'Achocolatado Em Pó Nescau 400g 2.0',
              'imagem': require(`../../../assets/img/produtos/nescau.jpg`),
              'desconto': true,
              'precoAntigo': 'R$6,99 un.',
              'preco': 'R$5,99 un.',
              'quantidade': 3
            }
          ]
        }
      ]
    }
  },

  methods: {
    drop: (e) => {
      let dd = document.querySelectorAll('.dd-menu')
      dd.forEach(element => {
        element.classList.remove('active')
      })

      let parent = e.target.parentElement.parentElement

      if (parent.classList.contains('list-active')) {
        let parents = document.querySelectorAll('.overflow-menu')
        parents.forEach(element => {
          element.classList.remove('list-active')
        })
      } else {
        let parents = document.querySelectorAll('.overflow-menu')
        parents.forEach(element => {
          element.classList.remove('list-active')
        })
        parent.classList.add('list-active')
      }

      let el = document.querySelector('.list-active .dd-menu')

      el.classList.toggle('active')
    },

    limpaPreco: (preco) => {
      preco = preco.replace(/[R$]/g, '').replace(/[/]/g, '').replace(/[a-z]/g, '').replace(' ', '').replace('.', '').replace(/[,]/g, '.')
      let valor = Number(preco).toFixed(2)
      return Number(valor)
    },

    excluir: () => { // TODO: Finalizar quando api estiver pronta
      console.log('Excluir lista')
    },

    createList () {
      this.$bus.$emit('MODAL_CREATE_LIST')
    }
  },

  mounted () {
    document.querySelector('html').addEventListener('click', function () {
      if (!event.target.classList.contains('overflow-menu-icon')) {
        let dd = document.querySelectorAll('.dd-menu')
        dd.forEach(element => {
          element.classList.remove('active')
        })
      }
    })

    this.listas.forEach((lista, index) => {
      let total = 0
      lista.produtos.forEach(produto => {
        total += this.limpaPreco(produto.preco)
      })
      this.listas[index].valor = total.toFixed(2).replace('.', ',')
    })
  }
}
</script>
