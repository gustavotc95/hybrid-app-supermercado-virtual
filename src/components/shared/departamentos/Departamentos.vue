<template>
    <div class="departamentos">
        <div class="container">
            <div class="block-title" :class="this.$route.name != 'Home' ? 'd-none' : '' ">
              Departamentos
            </div>
            <app-departamentos-desenhos :listaDepartamentos="listaDepartamentos" v-if="departamentosDesenhos"></app-departamentos-desenhos>

            <app-departamentos-lista :listaDepartamentos="listaDepartamentos" v-else ></app-departamentos-lista>
        </div>
    </div>
</template>

<script>
import DepartamentosDesenhos from './DepartamentosDesenhos.vue'
import DepartamentosLista from './DepartamentosLista.vue'

export default {
  data () {
    return {
      departamentosDesenhos: false, // TODO: Deve vir da API

      listaDepartamentos: [
        {
          'id': '1',
          'title': 'Cereais',
          'slug': 'cereais',
          'imagem': require(`../../../assets/img/departamentos/imagens/cereais.jpg`)
        },
        {
          'id': '2',
          'title': 'Mercearia',
          'slug': 'mercearia',
          'imagem': require(`../../../assets/img/departamentos/imagens/mercearia.jpg`)
        },
        {
          'id': '3',
          'title': 'Bolachas e Bomboniere',
          'slug': 'bolachas-bomboniere',
          'imagem': require(`../../../assets/img/departamentos/imagens/bomboniere.jpg`)
        },
        {
          'id': '4',
          'title': 'Matinais e Sobremesas',
          'slug': 'matinais-sobremesas',
          'imagem': require(`../../../assets/img/departamentos/imagens/matinais.jpg`)
        },
        {
          'id': '5',
          'title': 'Carnes, Linguiças e Salsichas',
          'slug': 'carnes',
          'imagem': require(`../../../assets/img/departamentos/imagens/carnes.jpg`)
        },
        {
          'id': '6',
          'title': 'Congelados',
          'slug': 'congelados',
          'imagem': require(`../../../assets/img/departamentos/imagens/congelados.jpg`)
        },
        {
          'id': '7',
          'title': 'Frios e Laticinios',
          'slug': 'frios-laticinios',
          'imagem': require(`../../../assets/img/departamentos/imagens/frios.jpg`)
        },
        {
          'id': '8',
          'title': 'Hortifruti',
          'slug': 'hortifruti',
          'imagem': require(`../../../assets/img/departamentos/imagens/hortifruti.png`)
        },
        {
          'id': '9',
          'title': 'Padaria',
          'slug': 'padaria',
          'imagem': require(`../../../assets/img/departamentos/imagens/padaria.jpg`)
        },
        {
          'id': '10',
          'title': 'Limpeza e Lavanderia',
          'slug': 'limpeza-lavanderia',
          'imagem': require(`../../../assets/img/departamentos/imagens/limpeza.jpg`)
        },
        {
          'id': '11',
          'title': 'Perfumaria e Higiene Pessoal',
          'slug': 'perfumaria-higiene',
          'imagem': require(`../../../assets/img/departamentos/imagens/higiene.jpg`)
        },
        {
          'id': '12',
          'title': 'Bebidas',
          'slug': 'bebidas',
          'imagem': require(`../../../assets/img/departamentos/imagens/bebidas.jpg`)
        },
        {
          'id': '13',
          'title': 'Petshop',
          'slug': 'petshop',
          'imagem': require(`../../../assets/img/departamentos/imagens/petshop.jpg`)
        },
        {
          'id': '14',
          'title': 'Bazar e Utilidades',
          'slug': 'bazar-utilidades',
          'imagem': require(`../../../assets/img/departamentos/imagens/bazar.jpg`)
        }
      ]
    }
  },

  components: {
    'app-departamentos-desenhos': DepartamentosDesenhos,
    'app-departamentos-lista': DepartamentosLista
  },

  methods: {
    getCategoria () {
      const config = {
        method: 'GET',
        url: `http://www.mocky.io/v2/5d60ad0c2f000053005f3cc1`
      }

      this.$axios(config)
        .then(response => {
          if (response.data) {
            // this.listaDepartamentos = response.data
          }
        })
    }
  },

  created () {
    this.getCategoria()
  }
}
</script>
