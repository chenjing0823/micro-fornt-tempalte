/*
 * @Author: jing.chen
 * @Date: 2021-08-16 09:19:50
 * @LastEditors: jing.chen
 * @LastEditTime: 2021-08-18 20:46:25
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '@/views/List.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import(/* webpackChunkName: "about" */ '@/views/List.vue')
  },
  {
    path: '/communication',
    name: 'communication',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Communication.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
  routes
})

export default router
