
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../views/Index.vue'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'
import NoPage from '../views/404.vue'


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
    {
        path: '/secondpage/:id',
        name: "secondpage",
        component: SecondPage
    },
    {
        path: '*',
        name: "any",
        component: NoPage
    },
]


export default new VueRouter({
    mode: "history",
    routes
})