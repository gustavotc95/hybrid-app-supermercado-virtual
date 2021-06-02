// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'
import VueAxios from 'vue-axios'

// Eventbus plugin
import eventbus from './plugins/eventbus'

Vue.config.productionTip = false

/**
 * Make $bus avaible to all components
 */
Vue.use(eventbus)

Vue.use(VueAxios, axios)

const cache = setupCache({ maxAge: 15 * 60 * 1000 })
const api = axios.create({ adapter: cache.adapter })

Vue.prototype.$axios = api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
