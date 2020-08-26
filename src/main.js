import Vue from 'vue'
import App from './App.vue'
// import VueRouter from 'vue-router'

Vue.config.productionTip = false



import router from './router/index'
router.afterEach((to, from) => {
  // ...
  console.log('afterEach to', to)
  console.log('afterEach from', from)
})
router.beforeEach((to, from, next) => {
  // ...
  console.log('to', to)
  console.log('from', from)
  console.log('next', next)
  next()
  // next({ path: '/' })
})
router.beforeResolve((to, from, next) => {
  // ...
  console.log('beforeResolve to', to)
  console.log('beforeResolve from', from)
  console.log(' beforeResolvenext', next)
  next()
  // next({ path: '/' })
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
