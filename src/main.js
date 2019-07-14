import Vue from 'vue'
import NProgress from 'vue-nprogress'
// import BootstrapVue from 'bootstrap-vue'
import App from '@/App.vue'
import router from '@/router'

// import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

const options = {
  nprogress: {
    parent: '.nprogress-container',
    latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
    router: true, // Show progressbar when navigating routes, default: true
    http: false // Show progressbar when doing Vue.http, default: true
  }
}
// Vue.use(BootstrapVue)
Vue.use(NProgress, options.nprogress)

const nprogress = new NProgress()

new Vue({
  nprogress,
  router,
  render: h => h(App)
}).$mount('#app')
