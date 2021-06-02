<template>
  <div class="bloco-menu" v-bind:class="this.menuFe == true ? '' : 'menu-active' ">
    <div class="app-menu">
      <div class="menu-header">
        <div class="col-user-info">
          <div class="nome-usuario">{{ userName }}</div>
          <router-link to="/editar-perfil" class="editar-perfil">Editar perfil</router-link>
        </div>
        <div class="close-icon" @click="fechar">
          <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-3x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
        </div>
      </div>

      <div class="menu-link">
        <div class="item" v-for="(item, index) in items" :key="index" @click="fechar">
          <router-link :to="item.path" v-if="item.menu" class="link"><span class="icon" :class="item.icon"></span> {{item.label}}</router-link>
        </div>
        <div class="item">
          <a @click.prevent="logout()" class="link"><span class="icon exit-icon"></span> Sair</a>
        </div>
      </div>
    </div>
    <div class="to-close-menu" @click="fechar">
    </div>
  </div>
</template>

<script>

export default {

  props: ['menuFe'],

  created () {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path,
        menu: route.menu,
        label: route.label,
        icon: route.icon
      })
    })
  },

  computed: {
    userName () {
      return 'Nome Usuário'
    }
  },

  data () {
    return {
      items: []
    }
  },

  methods: {
    fechar: function (event) {
      document.querySelector('.bloco-menu').classList.remove('menu-active')
    },

    goTo (item) {
      if (this.$route.path === item.path) {
        this.fechar()
      } else {
        this.$router.push(item.path)
      }
    },

    logout () {
      localStorage.removeItem('logged')
      localStorage.removeItem('partner')
      localStorage.removeItem('user')
      localStorage.removeItem('userid')
      localStorage.removeItem('jwt.token')

      this.$router.push({name: 'login'})
    },

    file_get_contents (filename) {
      fetch(filename).then((resp) => resp.text()).then(function (resp) {
        return resp
      })
    }
  }
}
</script>
