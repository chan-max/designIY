
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import home from '../views/base/home.vue'
import signup from '../views/user/signup.vue'
import login from '../views/user/login.vue'
import design from '../views/main/design.vue'
import search from '@/views/base/search.vue'
import workspace from '@/views/workspace/index.vue'
import market from '@/views/market/index.vue'
import {adminRoutes} from './adminRouter'
import unknown from '@/views/base/unknown.vue'
import admin from '@/views/admin/index.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: home,
    },
    {
        path: '/admin',
        name: 'Admin',
        component: admin,
        header:false,
        children:adminRoutes,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: signup,
        header:false
    },
    {
        path: '/login',
        name: 'Login',
        component: login,
        header:false,
    },
    {
        path: '/design',
        name: 'Design',
        component: design,
        header:false
    },
    {
        path: '/search',
        name: 'Search',
        component: search,
    },
    {
        path:'/workspace',
        name:'Workspace',
        component:workspace
    },
    {
        path:'/market',
        name:'Market',
        component:market
    },
    {
        path: '/:catchAll(.*)',
        name: 'Unknown',
        component: unknown,
    },
]   


let _routes = routeTransform(routes as any)

const router = createRouter({
    history: createWebHashHistory(),
    routes:_routes ,
})



import { blockAdminPage,blockLoginPage } from './routerInterception'
import { routeTransform } from './routeTransform'

blockLoginPage(router)
blockAdminPage(router)

export default router
