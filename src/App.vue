<template>
  <div id="app" :class="this.$route.name.replace(/[àáâãäå]/g, 'a').replace(/[ÀÁÂÃÄÅ]/g, 'A').replace(/[èéê]/g, 'e').replace(/[ÈÉÊË]/g, 'E').replace(/[òóôõ]/g, 'o').replace(/[ç]/g, 'c')">
    <app-header></app-header>
    <router-view/>
    <app-footer></app-footer>
    <prod-info></prod-info>
    <add-cart-modal></add-cart-modal>
    <add-list></add-list>
    <create-list></create-list>
    <horarios-entrega></horarios-entrega>
    <finaliza-compra></finaliza-compra>
  </div>
</template>

<script>
// import components
import Header from './components/shared/base/Header.vue'
import Footer from './components/shared/base/Footer.vue'
import ModalAddCart from './components/modal/ModalAddCart.vue'
import ModalProdInfo from './components/modal/ModalProdInfo.vue'
import ModalAddList from './components/modal/ModalAddList.vue'
import ModalCreateList from './components/modal/ModalCreateList.vue'
import ModalHorariosVue from './components/modal/ModalHorarios.vue'
import ModalFinalizaCompraVue from './components/modal/ModalFinalizaCompra.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'add-cart-modal': ModalAddCart,
    'prod-info': ModalProdInfo,
    'add-list': ModalAddList,
    'create-list': ModalCreateList,
    'horarios-entrega': ModalHorariosVue,
    'finaliza-compra': ModalFinalizaCompraVue
  }
}

// TODO: Fluxo carrinho

// TODO: Revisar fluxo de compra na lista detalhe

</script>

<style lang="scss">
    @import "./assets/sass/style.scss";
</style>
