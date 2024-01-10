/*
 * @Author: chan-max 2651308363@qq.com
 * @Date: 2023-11-28 01:16:00
 * @LastEditors: chan-max jackieontheway666@gmail.com
 * @LastEditTime: 2024-01-06 17:59:24
 * @FilePath: /1s/src/modules/app/router/index.ts
 * @Description: 
 * 
 * Copyright (c) 2023 by 1s, All Rights Reserved. 
 */
import { createRouter, createWebHistory,createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import home from '../views/home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/index'
  },
  {
    path:'/scan',
    name:'Scan',
    component:() => import('../views/scan/index.vue')
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/login/index.vue')
  },
  {
    path:'/signup',
    name:'Signup',
    component:() => import('../views/signup/index.vue')
  },
  {
    path:'/modelDetail',
    name:'ModelDetail',
    component:() => import('../views/modelDetail/index.vue')
  },
  {
    path: '/home/',
    name:'Home',
    component: home,
    children: [ 
      {
        name:'Redirect',
        path: '',
        redirect: '/home/index'
      },
      {
        name:'HomeIndex',
        path: 'index',
        component: () => import('../views/index/index.vue')
      },
      {
        name:'Market',
        path: 'market',
        component: () => import('../views/market/index.vue')
      },
      {
        name:'Workspace',
        path: 'workspace',
        component: () => import('../views/workspace/index.vue')
      },
      {
        name:'Talk',
        path: 'talk',
        component: () => import('../views/talk/index.vue')
      },
      {
        name:'User',
        path: 'user',
        component: () => import('../views/user/index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
