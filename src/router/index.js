import Vue from 'vue'
import Router from 'vue-router'

// import pages
import Home from '../components/pages/home/Home.vue'
import Cadastro from '../components/pages/login/Cadastro.vue'
import Editar from '../components/pages/login/EditarUsuario.vue'
import Departamentos from '../components/shared/departamentos/Departamentos.vue'
import Departamento from '../components/shared/departamentos/Departamento.vue'
import Ofertas from '../components/pages/ofertas/Ofertas.vue'
import Produtos from '../components/pages/produtos/Produtos.vue'
import Carrinho from '../components/pages/carrinho/Carrinho.vue'
import Enderecos from '../components/pages/enderecos/Enderecos.vue'
import Pedidos from '../components/pages/pedidos/Pedidos.vue'
import PedidosDetalhe from '../components/pages/pedidos/PedidosDetalhe.vue'
import EscolhaEndereco from '../components/pages/carrinho/EscolhaEndereco.vue'
import EscolhaEntrega from '../components/pages/carrinho/EscolhaEntrega.vue'
import EscolhaFormaPagamento from '../components/pages/carrinho/EscolhaFormaPagamento.vue'
import Login from '../components/pages/login/Login.vue'
import RecuperacaoSenha from '../components/pages/login/RecuperacaoSenha.vue'
import Sobre from '../components/pages/sobre/Sobre.vue'
import Contato from '../components/pages/contato/Contato.vue'
import Pesquisar from '../components/pages/pesquisar/Pesquisar.vue'
import Listas from '../components/pages/listas/Listas.vue'
import ListaDetalhe from '../components/pages/listas/ListaDetalhe.vue'
import Notificacoes from '../components/pages/notificacoes/Notificacoes.vue'
import Notificacao from '../components/pages/notificacoes/Notificacao.vue'

Vue.use(Router)

const router = new Router({
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      label: 'Início',
      menu: true,
      icon: 'home-icon'
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      label: 'Login',
      menu: false,
      icon: 'home-icon'
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
      label: 'Cadastro',
      menu: false,
      icon: 'user-icon'
    },
    {
      path: '/recuperacao-senha',
      name: 'recuperacao senha',
      component: RecuperacaoSenha,
      label: 'Esqueci Minha Senha',
      menu: false,
      icon: 'user-icon'
    },
    {
      path: '/editar-perfil',
      name: 'Editar Perfil',
      component: Editar,
      label: 'Editar',
      menu: false,
      icon: 'user-icon'
    },
    {
      path: '/departamentos',
      name: 'Departamentos',
      component: Departamentos,
      label: 'Departamentos',
      menu: true,
      icon: 'departamentos-icon',
      meta: {
        backHome: true
      }
    },
    {
      path: '/departamentos/:slug',
      name: 'Departamento',
      component: Departamento,
      label: 'Departamento',
      menu: false,
      icon: 'departamentos-icon',
      props: true
    },
    {
      path: '/departamentos/:slug/:categoriaSlug',
      name: 'Produtos',
      component: Produtos,
      menu: false,
      props: true
    },
    {
      path: '/ofertas',
      name: 'Ofertas',
      component: Ofertas,
      label: 'Ofertas',
      menu: true,
      icon: 'oferta-icon',
      meta: {
        backTop: true,
        backHome: true
      }
    },
    {
      path: '/listas',
      name: 'listas',
      component: Listas,
      label: 'Minhas Listas',
      menu: true,
      icon: 'list-icon'
    },
    {
      path: '/listas/lista-detalhe/',
      name: 'lista detalhe',
      component: ListaDetalhe,
      label: 'Lista Detalhe',
      menu: false,
      icon: 'list-icon',
      props: true
    },
    {
      path: '/enderecos',
      name: 'endereços',
      component: Enderecos,
      label: 'Meus Endereços',
      menu: true,
      icon: 'map-icon'
    },
    {
      path: '/pedidos',
      name: 'pedidos',
      component: Pedidos,
      label: 'Meus pedidos',
      menu: true,
      icon: 'box-icon'
    },
    {
      path: '/pedidos/detalhe',
      name: 'pedido detalhe',
      component: PedidosDetalhe,
      label: 'Meus pedidos',
      menu: false,
      icon: 'box-icon',
      props: true
    },
    {
      path: '/notificacoes',
      name: 'notificações',
      component: Notificacoes,
      label: 'Notificações',
      menu: true,
      icon: 'bell-icon'
    },
    {
      path: '/notificacao',
      name: 'notificação',
      component: Notificacao,
      label: 'Notificação',
      menu: false,
      icon: 'bell-icon',
      props: true
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato,
      label: 'Contato',
      menu: true,
      icon: 'comments-icon'
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre,
      label: 'Sobre',
      menu: true,
      icon: 'info-icon'
    },
    {
      path: '/carrinho',
      name: 'Carrinho',
      component: Carrinho,
      label: 'Carrinho',
      menu: false
    },
    {
      path: '/carrinho/endereco',
      name: 'Escolha seu endereço',
      component: EscolhaEndereco,
      label: 'Escolha Endereço',
      menu: false
    },
    {
      path: '/carrinho/entrega',
      name: 'Entrega',
      component: EscolhaEntrega,
      label: 'Entrega',
      menu: false
    },
    {
      path: '/carrinho/pagemnto',
      name: 'Pagamento',
      component: EscolhaFormaPagamento,
      label: 'Pagamento',
      menu: false
    },
    {
      path: '/search',
      name: 'Pesquisar',
      component: Pesquisar,
      label: 'Pesquisar',
      menu: false,
      meta: {
        backTop: true,
        backHome: false
      }
    }
  ]
})

export default router
