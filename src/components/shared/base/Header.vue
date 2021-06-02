<template>
    <div class="app-top" :class="this.$route.name == 'Home' ? 'home' : '' ">
      <div class="app-header shadow">
        <div id="nav-icon" class="menu-icon" v-on:click="greet">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="logo">
          <router-link :to="{name: 'Home'}">
            <img src="../../../assets/img/logo-supermercado.png" alt="Logo Supermercado">
          </router-link>
        </div>

        <div class="bloco-icones">
          <router-link to="/search" class="search-header">
            <div class="icon icon-header search-icon"></div>
          </router-link>
          <router-link to="/carrinho" class="carrinho-header">
            <div class="icon icon-header cart-icon"></div>
            <span v-show="showNumbers" class="quantidade">{{quantidadeCarrinho}}</span>
          </router-link>
        </div>
      </div>

      <div v-if="this.$route.meta.backHome">
        <div class="top-header" v-if="this.$route.name != 'Home'" @click="$router.push({ name: 'Home' })">
          <span class="icon back-icon"></span>
          <span v-if="this.$route.meta.backTop">Voltar</span>
          <span v-else>{{this.$route.name}}</span>
        </div>
      </div>

      <div v-else>
        <div class="top-header" v-if="this.$route.name != 'Home'" @click="$router.go(-1)">
          <span class="icon back-icon"></span>
          <span v-if="this.$route.meta.backTop">Voltar</span>
          <span v-else>{{this.$route.name}}</span>
        </div>
      </div>

      <app-menu v-bind:menuFe="this.menuFechado"></app-menu>
    </div>
</template>

<script>
import Menu from '../menu/Menu.vue'

export default {
  components: {
    'app-menu': Menu
  },
  data () {
    return {
      menuFechado: true,
      showNumbers: true,
      quantidadeCarrinho: 0
    }
  },

  methods: {
    greet: function (event) {
      document.querySelector('.bloco-menu').classList.add('menu-active')
    },

    listener () {
      this.$bus.$on('MODAL_QTD_CART', payload => {
        this.verificaQuantidadeCarrinho()
      })
    },

    verificaQuantidadeCarrinho () {
      this.quantidadeCarrinho = 0
      if (localStorage.produtosCompra) {
        let produtosCarrinho = JSON.parse(localStorage.getItem('produtosCompra'))
        produtosCarrinho.forEach((produto, index) => {
          this.quantidadeCarrinho += Number(produto.quantidade)
          this.showNumbers = true
        })
        localStorage.quantidadeCarrinho = JSON.stringify(this.quantidadeCarrinho)
      }
      if (localStorage.quantidadeCarrinho === '0') {
        this.showNumbers = false
      }
    }
  },

  mounted () {
    this.verificaQuantidadeCarrinho()
    this.listener()
  }
}

</script>
