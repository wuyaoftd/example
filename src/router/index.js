
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../views/Index.vue'
import FirstPage from '../views/FirstPage.vue'


const routes = [
    {
        path: '/',
        name: "index",
        component: Index
    },
    {
        path: '/firstpage',
        name: "firstpage",
        component: FirstPage
    },
]


export default new VueRouter({
    mode: "history",
    routes
})