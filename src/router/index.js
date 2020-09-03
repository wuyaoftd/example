
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../views/Index.vue'
import FirstPage from '../views/FirstPage.vue'
import SecondPage from '../views/SecondPage.vue'

import Parent from '../views/Parent.vue'

import Child from '../views/Child.vue'
import ChildChild from '../views/ChildChild.vue'

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
        beforeEnter: (to, from, next) => {
            console.log('beforeEnter', to)
            console.log('beforeEnter', from)
            console.log('beforeEnter', next)
            next()
        },
        component: FirstPage
    },
    {
        path: '/secondpage/:id',
        name: "secondpage",
        component: SecondPage
    },
    {
        path: '/parent',
        name: "parent",
        component: Parent

    },
    {
        path: '/child',
        name: "child",
        component: Child,
        children: [{
            path: 'child-child',
            name: "child-child",
            component: ChildChild,

        }]

    },
    {
        path: '*',
        name: "any",
        component: NoPage
    },
]


export default new VueRouter({
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        // return 期望滚动到哪个的位置

        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
})