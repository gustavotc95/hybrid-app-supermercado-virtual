<template>
  <div class="app-sub-grupo">
    <div class="container">
      <div class="row row-categorias">
        <div v-for="(categoria, index) in categorias" :key="index"
          class="col-4 col-sm-3 item item-categoria" >
            <router-link :to="{ name: 'Produtos', params: { slug: departamento.slug, categoriaSlug: categoria.title, categoriaInfo: categoria,  categorias: categorias, departamento: departamento} }"> <!-- TODO: deve vir da api o slug da caegoria-->
              <div class="image">
                <img :src="categoria.imageLista" :alt="categoria.title">
              </div>
              <div class="title">
                {{categoria.title}}
              </div>
            </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import components

export default {
  props: ['infos'],

  data () {
    return {
      departamento: this.infos,

      categorias: [
        {
          'id': 1,
          'departamentoId': 1,
          'title': 'Amendoim e canjica',
          'imageLista': require(`../../../assets/img/categorias/amendoim.jpg`),
          'imageTitle': require(`../../../assets/img/categorias/amendoim2.jpg`)
        },
        {
          'id': 2,
          'departamentoId': 2,
          'title': 'Achocolatado chocolate e cacau em pó',
          'imageLista': require(`../../../assets/img/categorias/achocolatado.jpg`),
          'imageTitle': require(`../../../assets/img/categorias/achocolatado.jpg`)
        },
        {
          'id': 3,
          'departamentoId': 3,
          'title': 'Açúcar',
          'imageLista': require(`../../../assets/img/categorias/acucar.jpg`),
          'imageTitle': require(`../../../assets/img/categorias/acucar.jpg`)
        },
        {
          'id': 4,
          'departamentoId': 4,
          'title': 'Arroz',
          'imageLista': require(`../../../assets/img/categorias/arroz.jpg`),
          'imageTitle': require(`../../../assets/img/categorias/arroz.jpg`)
        },
        {
          'id': 5,
          'departamentoId': 5,
          'title': 'Defumados',
          'imageLista': require(`../../../assets/img/categorias/defumados.jpg`),
          'imageTitle': require(`../../../assets/img/categorias/defumados.jpg`)
        },
        {
          'id': 6,
          'departamentoId': 6,
          'title': 'Aves e cortes congelado',
          'imageLista': require(`../../../assets/img/categorias/frango.jpg`),
          'imageTitle': require(`../../../assets/img/categorias/frango.jpg`)
        }
      ]
    }
  },

  methods: {
    getCategoria () {
      const config = {
        method: 'GET',
        url: `https://jsonplaceholder.typicode.com/photos?albumId=${this.infos.id}`
        // url: `api-url?departamentoId=${this.infos.id}`
      }

      this.$axios(config)
        .then(response => {
          if (response.data) {
            // console.log(response.data)
            // this.categorias = response.data
          }
        })
    },
    getCategoriaTemp () {
      if (localStorage.departamento) { // FIXME: Revisar após integração com a API
        if (!this.departamento) {
          this.departamento = JSON.parse(localStorage.getItem('departamento'))
          this.categorias = JSON.parse(localStorage.getItem('categorias'))
        }
      }
    }
  },

  created () {
    this.getCategoriaTemp()
  }
}
</script>
