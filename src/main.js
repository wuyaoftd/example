import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

Vue.config.productionTip = false



import router from './router/index'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
